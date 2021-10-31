const todosService = require('../services/todosService');

const create = async (req, res) => {
  const { todo } = req.body;
  const { userId } = req.user;

  const newTodo = await todosService.create(todo, userId);

  return res.status(201).json(newTodo);
};

const exclude = async (req, res, next) => {
  const { todoId } = req.params;

  const todoToDelete = await todosService.findTodoById(todoId);

  if (!todoToDelete) {
    return next({ code: 'notFound', message: 'Todo id not found' });
  }

  await todosService.exclude(todoId);

  res.status(204).send();
};

const getAllTodos = async (_req, res, _next) => {
  const todos = await todosService.getAllTodos();

  return res.status(200).json(todos);
};

module.exports = {
  create,
  exclude,
  getAllTodos,
};
