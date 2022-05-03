const { saleProductService } = require('../services');

const create = async (req, res) => {
  const result = await saleProductService.create(req.body);

  res.status(201).json(result);
};

const read = async (_req, res) => {
  const result = await saleProductService.read();

  res.status(200).json(result);
};

const update = async (req, res) => {
  await saleProductService.update(req.params.id, req.body);

  res.status(204).send();
};

module.exports = {
  create,
  read,
  update,
};
