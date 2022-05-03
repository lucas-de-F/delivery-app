const { Router } = require('express');

const { saleProductController } = require('../controllers');

// const { productSchema } = require('../utils/JoiSchemas');
// const { validateJoi } = require('../middlewares');
// const { authenticator } = require('../middlewares');

const saleProductRoute = Router();

saleProductRoute.post('/', saleProductController.create);

saleProductRoute.get('/', saleProductController.read);

saleProductRoute.put('/:id', saleProductController.update);

module.exports = saleProductRoute;
