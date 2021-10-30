const Joi = require('joi');

module.exports = (req, _res, next) => {
  const signupSchema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate(req.body);

  if (signupSchema.error) {
    return next(signupSchema.error);
  }

  next();
};
