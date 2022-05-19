const { Router } = require('express');

const { saleController } = require('../controllers');

const { deliverySchema } = require('../utils/JoiSchemas');
const { validateJoi } = require('../middlewares');
const { authenticator } = require('../middlewares');

const deliveryRoute = Router();

deliveryRoute.patch(
  '/:id',
  authenticator(),
  validateJoi(deliverySchema),
  saleController.updateDelivery,
);

module.exports = deliveryRoute;
