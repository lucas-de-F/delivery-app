const { Router } = require('express');

const { productController } = require('../controllers');
const { productSchema } = require('../utils/JoiSchemas');
const { validateJoi } = require('../middlewares');

const productRoute = Router();

productRoute.post('/', validateJoi(productSchema), productController.create);

productRoute.get('/', productController.read);

productRoute.put('/:id', validateJoi(productSchema), productController.update);

productRoute.delete('/:id', validateJoi(productSchema), productController.remove);

module.exports = productRoute;
