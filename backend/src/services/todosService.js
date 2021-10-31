const todosModel = require('../models/todosModel');

const create = async (todo, userId) => {
  const status = 'pending';
  const createdAt = new Date().toString();

  const newTodo = await todosModel.create(userId, todo, status, createdAt);

  return newTodo;
};

module.exports = {
  create,
};
