const { Router } = require('express');

const { userController } = require('../controllers');
const { authenticator } = require('../middlewares');

const SellerRoute = Router();

SellerRoute.get('/', authenticator(), userController.getSellers);

module.exports = SellerRoute;
