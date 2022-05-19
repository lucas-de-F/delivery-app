import Joi from 'joi';

const min = 6;
const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(min).required(),
});

export default loginSchema;
