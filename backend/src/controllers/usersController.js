const signup = async (req, res, _next) => {
  res.status(200).send('rota de signup ok');
};

const login = async (_req, _res, _next) => {
};

module.exports = { 
  signup,
  login,
};
