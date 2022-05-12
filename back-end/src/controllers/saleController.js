const { saleService } = require('../services');

const create = async (req, res) => {
  const result = await saleService.create(req.body);

  res.status(201).json(result);
};

const read = async (req, res) => {
  const { id } = req.params;
  const { role } = req.query;

  const result = await saleService.readOne(id, role);

  res.status(200).json(result);
};

const update = async (req, res) => {
  await saleService.update(req.params.id, req.body);

  res.status(204).send();
};

module.exports = {
  create,
  read,
  update,
};
