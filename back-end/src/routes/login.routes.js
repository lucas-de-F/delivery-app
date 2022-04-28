const { Router } = require('express');

const { authController } = require('../controllers');
const validadeJoi = require('../utils/JoiSchemas/validateJoi');
const schema = require('../utils/JoiSchemas/loginSchema');

const loginRoute = Router();

loginRoute.post('/', validadeJoi(schema), authController.login);

module.exports = loginRoute;
