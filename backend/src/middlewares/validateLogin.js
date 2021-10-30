const Joi = require('joi');

module.exports = (req, _res, next) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate(req.body);

  if (loginSchema.error) {
    return next(loginSchema.error);
  }

  next();
};
