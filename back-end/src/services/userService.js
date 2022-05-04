const md5 = require('md5');

const { User } = require('../database/models');
const { AppError, jwt } = require('../utils');

const verifyUserEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (!user) return null;

  return user.dataValues;
};

const login = async (e, password) => {
  const result = await verifyUserEmail(e);

  if (!result) {
    throw AppError('notFound', 'User not exists');
  }

  if (result.password !== md5(password)) {
    throw AppError('unauthorized', 'Incorrect email or password');
  }

  const { role, name, email } = result;

  const token = jwt.sign({ role, name, email });

  return token;
};

const createUser = async ({ name, email, password }) => {
  const newUser = {
    name,
    email,
    password: md5(password),
  };

  const response = await verifyUserEmail(email);

  if (response) {
    throw AppError('unauthorized', 'This email address is already in use');
  }

  const result = await User.create({ ...newUser, role: 'customer' });

  const { role } = result;

  const token = jwt.sign({ role });

  return token;
};

module.exports = {
  login,
  createUser,
};
