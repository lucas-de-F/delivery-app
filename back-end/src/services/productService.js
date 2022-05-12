const { Product } = require('../database/models');
const { AppError } = require('../utils');

const create = async (product) => Product.create(product);

const read = async () => Product.findAll();

const readOne = async (id) => Product.findByPk(id);

const update = async (id, product) => {
  const result = await readOne(id);

  if (!result) {
    throw AppError('notFound', 'Product not found');
  }

  await Product.update(product, { where: { id } });
};

const remove = async (id) => {
  const result = await readOne(id);

  if (!result) {
    throw AppError('notFound', 'Product not found');
  }

  await Product.destroy({ where: { id } });
};

module.exports = {
  create,
  read,
  update,
  remove,
};
