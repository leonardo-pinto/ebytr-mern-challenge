require('dotenv').config();
const jwt = require('jsonwebtoken');
const usersService = require('../services/usersService');

const jwtConfiguration = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const emailAlreadyExists = await usersService.isEmailAlreadyRegistered(email);

  if (emailAlreadyExists) {
    return next({ code: 'emailExists', message: 'email already registered' });
  }

  await usersService.createUser(name, email, password);

  res.status(201).json({ message: 'User created successfully!' });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const userData = await usersService.login(email);

  if (!userData || userData.email !== email || userData.password !== password) {
    return next({ code: 'incorrectLogin', message: 'Incorrect email or password' });
  }

  const { _id: userId } = userData;
  const token = jwt.sign({ data: { userId, email } }, process.env.JWT_SECRET, jwtConfiguration);

  return res.status(200).json({ token });
};

module.exports = { 
  signup,
  login,
};
