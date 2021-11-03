const todosModel = require('../models/todosModel');

const create = async (todo, userId) => {
  const status = 'Pending';
  const rawDate = new Date().toString();
  const createdAt = rawDate.split('G')[0];

  const newTodo = await todosModel.create(userId, todo, status, createdAt);

  return newTodo;
};

const exclude = async (todoId) => {
  const response = await todosModel.findTodoById(todoId);

  if (!response) {
    return { err: { code: 'notFound', message: 'Todo id not found' } };
  }

  await todosModel.exclude(todoId);

  return {};
};

const getAll = async (userId) => {
  const todos = await todosModel.getAll(userId);

  return todos;
};

const update = async (todoData) => {
  const { todoId } = todoData;

  const response = await todosModel.findTodoById(todoId);

  if (!response) {
    return { err: { code: 'notFound', message: 'Todo id not found' } };
  }

  const updatedTodo = await todosModel.update(todoData);

  return updatedTodo;
};

module.exports = {
  create,
  exclude,
  getAll,
  update,
};
