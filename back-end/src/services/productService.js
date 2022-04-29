const { Product } = require('../database/models');

const findAll = async () => {
  const result = await Product.findAll();

  return result;
};

module.exports = {
  findAll,
};
