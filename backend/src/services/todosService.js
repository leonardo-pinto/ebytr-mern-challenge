const todosModel = require('../models/todosModel');

const create = async (todo, userId) => {
  const status = 'pending';
  const createdAt = new Date().toString();

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

const getAll = async () => {
  const todos = await todosModel.getAll();
  
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
