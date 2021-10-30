const usersService = require('../services/usersService');

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const emailAlreadyExists = await usersService.isEmailAlreadyRegistered(email);

  if (emailAlreadyExists) {
    return next({ code: 'emailExists', message: 'email already registered' });
  }

  await usersService.createUser(name, email, password);

  res.status(201).json({ message: 'User created successfully!' });
};

const login = async (_req, _res, _next) => {
};

module.exports = { 
  signup,
  login,
};
