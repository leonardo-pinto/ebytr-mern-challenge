const todosService = require('../services/todosService');

const create = async (req, res) => {
  const { todo } = req.body;
  const { userId } = req.user;

  const newTodo = await todosService.create(todo, userId);
  console.log(newTodo);
  return res.status(201).json(newTodo);
};

module.exports = {
  create,
};
