const todosModel = require('../models/todosModel');

const create = async (todo, userId) => {
  const newTodo = await todosModel.create(todo, userId);

  return newTodo;
};

module.exports = {
  create,
};
