const { Router } = require('express');

const { authController } = require('../controllers');

const loginRoute = Router();

loginRoute.post('/', authController.login);

module.exports = loginRoute;
