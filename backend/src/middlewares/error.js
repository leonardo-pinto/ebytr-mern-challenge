module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.details[0].message });
  }

  const { code, message } = err;

  const codeDictionaryErr = {
    emailExists: 409,
    incorrectLogin: 401,
    noToken: 401,
    jwtMalformed: 401,
  };

  if (err.code) {
    return res.status(codeDictionaryErr[code]).json({ message });
  }

  return res.status(500).json(err);
};
