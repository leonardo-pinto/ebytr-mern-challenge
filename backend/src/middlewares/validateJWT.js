require('dotenv').config();
const jwt = require('jsonwebtoken');

const validateJWT = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({ code: 'noToken', message: 'missing auth token' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const { userId, email, name } = payload.data;
    req.user = { userId, email, name };
    next();
  } catch (err) {
    return next({ code: 'jwtMalformed', message: 'token is expired. please login again' });
  }
};

module.exports = validateJWT;
