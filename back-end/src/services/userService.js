const { Op } = require('sequelize');

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

  if (result.password !== password) {
    throw AppError('unauthorized', 'Incorrect email or password');
  }

  const { role, name, email, id } = result;

  const token = jwt.sign({ role, name, email, id });

  return token;
};

const createUser = async ({ name, email, password, role }) => {
  const newUser = {
    name,
    email,
    password,
    role,
  };

  const response = await verifyUserEmail(email);

  if (response) {
    throw AppError('conflict', 'This email address is already in use');
  }

  const result = await User.create({ ...newUser });

  const { id } = result;

  const token = jwt.sign({ role, name, email, id });

  return token;
};

const getSellers = async () => User.findAll(
  { where: { role: 'seller' }, attributes: ['id', 'name'] },
  );

  // readll pega todos os usuários da role customer ou seller menos o admin e retorna id name e role
const readAll = async () => User.findAll(
  {
    where: {
      [Op.or]: [
        { role: 'customer' },
        { role: 'seller' },
      ],
    },
    attributes: ['id', 'name', 'role'],
  },
);

const remove = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    throw AppError('notFound', 'User not exists');
  }

  await user.destroy();
};

module.exports = {
  login,
  createUser,
  getSellers,
  readAll,
  remove,
};
