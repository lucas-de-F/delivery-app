const { Router } = require('express');

const { userController } = require('../controllers');
const { registerSchema, validateJoi } = require('../utils/JoiSchemas');

const registerRoute = Router();

registerRoute.post('/', validateJoi(registerSchema), userController.register);

module.exports = registerRoute;
