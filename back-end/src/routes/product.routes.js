const { Router } = require('express');

const { productController } = require('../controllers');
const { productSchema } = require('../utils/JoiSchemas');
const { validateJoi } = require('../middlewares');
const { authenticator } = require('../middlewares');

const productRoute = Router();

productRoute.post(
  '/',
  authenticator('seller'),
  validateJoi(productSchema), 
  productController.create,
);

productRoute.get('/', productController.read);

productRoute.put(
  '/:id',
  authenticator('seller'),
  validateJoi(productSchema),
  productController.update,
);

productRoute.delete('/:id', authenticator('seller'), productController.remove);

module.exports = productRoute;
