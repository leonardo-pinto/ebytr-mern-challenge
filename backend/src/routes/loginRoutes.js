const router = require('express').Router();
const usersControllers = require('../controllers/usersController');

router.post('/', usersControllers.login);

module.exports = router;
