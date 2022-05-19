const { Router } = require('express');

const { userController } = require('../controllers');
const { authenticator } = require('../middlewares');

const UserRoute = Router();

UserRoute.get('/', authenticator('administrator'), userController.readAll);

UserRoute.delete('/:id', authenticator('administrator'), userController.remove);

module.exports = UserRoute;
