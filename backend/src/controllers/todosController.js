const todosService = require('../services/todosService');

const create = async (req, res) => {
  const { todo } = req.body;
  const { userId } = req.user;

  const newTodo = await todosService.create(todo, userId);

  return res.status(201).json(newTodo);
};

const exclude = async (req, res, next) => {
  const { todoId } = req.params;

  const response = await todosService.exclude(todoId);

  if (response.err) {
    return next(response.err);
  }

  res.status(204).send();
};

const getAll = async (req, res, _next) => {
  const { userId } = req.user;
  const todos = await todosService.getAll(userId);

  return res.status(200).json(todos);
};

const update = async (req, res, next) => {
  const { userId } = req.user;
  const { todoId } = req.params;

  const updatedTodo = await todosService.update({ ...req.body, todoId, userId });

  if (updatedTodo.err) {
    return next(updatedTodo.err);
  }

  return res.status(200).json(updatedTodo);
};

module.exports = {
  create,
  exclude,
  getAll,
  update,
};
