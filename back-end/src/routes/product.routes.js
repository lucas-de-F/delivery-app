const { Router } = require('express');

const { productController } = require('../controllers');

const productRoute = Router();

productRoute.get('/', productController.products);

module.exports = productRoute;
