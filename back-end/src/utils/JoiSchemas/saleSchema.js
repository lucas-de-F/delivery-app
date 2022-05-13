const Joi = require('joi');

const saleSchema = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().integer().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  saleDate: Joi.date(),
  products: Joi.array().items(Joi.object().keys({
    productId: Joi.number().integer().required(),
    quantity: Joi.number().integer().required(),
  })).required(),
});

module.exports = saleSchema;
