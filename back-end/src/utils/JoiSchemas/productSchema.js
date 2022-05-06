const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  urlImage: Joi.string().uri().required(),
});

module.exports = productSchema;
