const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('express-async-errors');

const { loginRoute, registerRoute, productRoute, saleRoute } = require('../routes');
const { domainError } = require('../middlewares');

const app = express();
app.use(cors());
app.use('/images', express.static('images'));
app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productRoute);
app.use('/sales', saleRoute);

app.use(domainError);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
