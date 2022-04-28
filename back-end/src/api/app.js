const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors');

const { loginRoute } = require('../routes');
const { domainError } = require('../middlewares');

const app = express();

app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use(domainError);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
