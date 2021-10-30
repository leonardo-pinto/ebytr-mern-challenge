const router = require('express').Router();
const validateLogin = require('../middlewares/validateLogin');
const usersControllers = require('../controllers/usersController');

router.post('/', validateLogin, usersControllers.login);

module.exports = router;
