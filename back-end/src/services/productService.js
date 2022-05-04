const { Product } = require('../database/models');

const create = async (product) => Product.create(product);

const read = async () => Product.findAll();

const update = async (id, product) => Product.update(product, { where: { id } });

const remove = async (id) => Product.destroy({ where: { id } });

module.exports = {
  create,
  read,
  update,
  remove,
};
