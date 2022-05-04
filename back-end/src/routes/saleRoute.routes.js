const { Router } = require('express');

const { saleController } = require('../controllers');

const { saleSchema } = require('../utils/JoiSchemas');
const { validateJoi } = require('../middlewares');
// const { authenticator } = require('../middlewares');

const saleRoute = Router();

saleRoute.post('/', validateJoi(saleSchema), saleController.create);

saleRoute.get('/:id', saleController.read);

saleRoute.put('/:id', saleController.update);

module.exports = saleRoute;
