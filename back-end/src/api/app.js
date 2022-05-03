const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('express-async-errors');

const { loginRoute, registerRoute, productRoute, saleProductRoute } = require('../routes');
const { domainError } = require('../middlewares');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productRoute);
app.use('/sales', saleProductRoute);

app.use(domainError);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
