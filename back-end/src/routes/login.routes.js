const { Router } = require('express');

const { authController } = require('../controllers');
const { loginSchema, validateJoi } = require('../utils/JoiSchemas');

const loginRoute = Router();

loginRoute.post('/', validateJoi(loginSchema), authController.login);

module.exports = loginRoute;
