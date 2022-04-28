const express = require('express');
const bodyParser = require('body-parser');

const login = require('../routes/login.routes');

const app = express();

app.use(bodyParser.json());

app.use('/login', login.route);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
