const { userService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;

    const result = await userService.login(email, password);

    res.status(200).json({ token: result });
};

module.exports = {
  login,
};
