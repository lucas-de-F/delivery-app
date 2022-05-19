const { userService } = require('../services');

const register = async (req, res) => {
  const result = await userService.createUser(req.body);

  res.status(201).json({ token: result });
};

const getSellers = async (req, res) => {
  const result = await userService.getSellers();

  res.status(200).json(result);
};

module.exports = {
  register,
  getSellers,
};
