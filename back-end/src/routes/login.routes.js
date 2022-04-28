const { Router } = require('express');

const authenticateController = require('../controllers/authenticateController');

const route = Router();

route.post('/', authenticateController.login);

module.exports = {
  route,
};
