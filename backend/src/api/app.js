const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const app = express();

app.get('/', (req, res) => {
  res.send('ok');
});

module.exports = app;