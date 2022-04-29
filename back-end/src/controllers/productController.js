const { productService } = require('../services');

const products = async (_req, res) => {
  const result = await productService.findAll();

  res.status(201).json(result);
};

module.exports = {
  products,
};
