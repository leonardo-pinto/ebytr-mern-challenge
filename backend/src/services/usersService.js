const usersModel = require('../models/usersModel');

const isEmailAlreadyRegistered = async (email) => {
  const emailExists = await usersModel.findEmail(email);

  if (emailExists) {
    return true;
  }

  return false;
};

const createUser = async (name, email, password) => {
  const newUser = usersModel.createUser(name, email, password);

  return newUser;
};

module.exports = {
  isEmailAlreadyRegistered,
  createUser,
};
