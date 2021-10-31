const todosModel = require('../models/todosModel');

const create = async (todo, userId) => {
  const status = 'pending';
  const createdAt = new Date().toString();

  const newTodo = await todosModel.create(userId, todo, status, createdAt);

  return newTodo;
};

const findTodoById = (todoId) => todosModel.findTodoById(todoId);

const exclude = (todoId) => todosModel.exclude(todoId);

const getAll = () => todosModel.getAll();

const update = (todoData) => todosModel.update(todoData);

module.exports = {
  create,
  exclude,
  findTodoById,
  getAll,
  update,
};
