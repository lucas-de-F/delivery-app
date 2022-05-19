import Joi from 'joi';

const minPwd = 6;
const minName = 12;

const RegisterSchema = Joi.object({
  name: Joi.string().min(minName).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(minPwd).required(),
});

export default RegisterSchema;
