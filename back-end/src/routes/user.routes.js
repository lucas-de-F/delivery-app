const { Router } = require('express');

const { userController } = require('../controllers');
const { authenticator } = require('../middlewares');

const UserRoute = Router();

UserRoute.get('/', authenticator(), userController.getSellers);

module.exports = UserRoute;
