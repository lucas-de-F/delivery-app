const cryptor = require('crypto');
const jwt = require('../utils/jwt');

const { User } = require('../database/models/index');
const createError = require('../utils/AppError');

const verifyUserEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) return null;

  return user.dataValues;
};

const login = async (email, password) => {
  const result = await verifyUserEmail(email);

  if (!result) {
    throw createError('unauthorized', 'Incorrect email or password');
  }

  const hashPassword = cryptor.createHash('md5').update(password).digest('hex');

  if (hashPassword !== result.password) {
    throw createError('unauthorized', 'Incorrect email or password');
  }

  const { role } = result;

  const token = jwt.sign({ role });

  return token;
};

module.exports = {
  login,
};
