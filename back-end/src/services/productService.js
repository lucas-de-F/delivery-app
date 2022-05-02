const { Product } = require('../database/models');

const create = async (product) => {
  const result = await Product.create(product);

  return result;
};

const read = async () => {
  const result = await Product.findAll();

  return result;
};

const update = async (id, product) => {
  const result = await Product.update(product, { where: { id } });

  return result;
};

const remove = async (id) => {
  const result = await Product.destroy({ where: { id } });

  return result;
};

module.exports = {
  create,
  read,
  update,
  remove,
};
