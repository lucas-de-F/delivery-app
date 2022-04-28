const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;

  try { 
    const result = await userService.login(email, password);

    res.status(200).json({ token: result });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login,
};
