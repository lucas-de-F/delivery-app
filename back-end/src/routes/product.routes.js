const { Router } = require('express');

const { productController } = require('../controllers');

const productRoute = Router();

productRoute.post('/', productController.create);

productRoute.get('/', productController.read);

productRoute.put('/:id', productController.update);

productRoute.delete('/:id', productController.remove);

module.exports = productRoute;
