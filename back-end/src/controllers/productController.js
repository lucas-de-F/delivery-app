const { productService } = require('../services');

const create = async (req, res) => {
  const result = await productService.create(req.body);

  res.status(201).json(result);
};

const read = async (_req, res) => {
  const result = await productService.read();

  res.status(200).json(result);
};

const update = async (req, res) => {
  await productService.update(req.params.id, req.body);

  res.status(204).send();
};

const remove = async (req, res) => {
  await productService.remove(req.params.id);

  res.status(204).send();
};

module.exports = {
  create,
  read,
  update,
  remove,
};
