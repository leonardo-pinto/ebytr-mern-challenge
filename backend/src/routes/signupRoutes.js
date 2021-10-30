const router = require('express').Router();
const usersControllers = require('../controllers/usersController');
const validateSignup = require('../middlewares/validateSignup');

router.post('/', validateSignup, usersControllers.signup);

module.exports = router;
