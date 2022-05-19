const { userService } = require('../services');

const register = async (req, res) => {
  const result = await userService.createUser(req.body);

  res.status(201).json({ token: result });
};

const getSellers = async (req, res) => {
  const result = await userService.getSellers();

  res.status(200).json(result);
};

const readAll = async (req, res) => {
  const result = await userService.readAll();

  res.status(200).json(result);
};

const remove = async (req, res) => {
  await userService.remove(req.params.id);

  res.status(204).send();
};

module.exports = {
  register,
  getSellers,
  readAll,
  remove,
};
