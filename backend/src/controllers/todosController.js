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

module.exports = {
  create,
  exclude,
};
