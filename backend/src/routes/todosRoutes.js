const router = require('express').Router();
const validateJWT = require('../middlewares/validateJWT');
const validateTodo = require('../middlewares/validateTodo');
const validateUpdateTodo = require('../middlewares/validateUpdateTodo');
const todosControllers = require('../controllers/todosController');

router.delete('/:todoId', validateJWT, todosControllers.exclude);
router.get('/', validateJWT, todosControllers.getAll);
router.post('/', validateJWT, validateTodo, todosControllers.create);
router.put('/:todoId', validateJWT, validateUpdateTodo, todosControllers.update);

module.exports = router;
