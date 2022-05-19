const { saleService } = require('../services');

const create = async (req, res) => {
  const result = await saleService.create(req.body);

  res.status(201).json(result);
};

const read = async (req, res) => {
  const { id } = req.params;
  const { role } = req.query;

  if (!role) {
    return res.status(401).json({ error: 'Role is required' });
  }

  const result = await saleService.readOne(id, role);

  res.status(200).json(result);
};

const updateDelivery = async (req, res) => {
  await saleService.partialUpdateDelivery(req.params.id, req.body);

  res.status(204).send();
};

module.exports = {
  create,
  read,
  updateDelivery,
};
