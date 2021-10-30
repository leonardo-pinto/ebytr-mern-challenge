const router = require('express').Router();
const validateJWT = require('../middlewares/validateJWT');
const validateNewTodo = require('../middlewares/validateNewTodo');
const todosControllers = require('../controllers/todosController');

router.post('/', validateJWT, validateNewTodo, todosControllers.create);

module.exports = router;
