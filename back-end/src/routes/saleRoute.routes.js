const { Router } = require('express');

const { saleController } = require('../controllers');

const { saleSchema } = require('../utils/JoiSchemas');
const { validateJoi } = require('../middlewares');
const { authenticator } = require('../middlewares');

const saleRoute = Router();

saleRoute.post('/', authenticator(), validateJoi(saleSchema), saleController.create);

saleRoute.get('/:id', authenticator(), saleController.read);

module.exports = saleRoute;
