const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const loginRoutes = require('../routes/loginRoutes');
const signupRoutes = require('../routes/signupRoutes');
const todosRoutes = require('../routes/todosRoutes');
const error = require('../middlewares/error');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/login', rescue(loginRoutes));
app.use('/signup', rescue(signupRoutes));
app.use('/todos', rescue(todosRoutes));

app.use(error);

module.exports = app;
