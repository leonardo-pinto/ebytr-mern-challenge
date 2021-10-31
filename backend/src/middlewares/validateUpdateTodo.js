const Joi = require('joi');

module.exports = (req, _res, next) => {
  const newTodoSchema = Joi.object({
    todo: Joi.string().required(),
    status: Joi.string().required(),
    createdAt: Joi.string().required(),
  }).validate(req.body);

  if (newTodoSchema.error) {
    return next(newTodoSchema.error);
  }

  next();
};
