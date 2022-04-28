const cryptor = require('crypto');

const { User } = require('../database/models');
const { AppError, jwt } = require('../utils');

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
    throw AppError('unauthorized', 'Incorrect email or password');
  }

  const hashPassword = cryptor.createHash('md5').update(password).digest('hex');

  if (hashPassword !== result.password) {
    throw AppError('unauthorized', 'Incorrect email or password');
  }

  const { role } = result;

  const token = jwt.sign({ role });

  return token;
};

module.exports = {
  login,
};
