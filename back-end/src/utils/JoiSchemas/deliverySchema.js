const Joi = require('joi');

const deliverySchema = Joi.object({
  status: Joi.string().required(),
});

module.exports = deliverySchema;
