const loginRoute = require('./login.routes');
const registerRoute = require('./createUser.routes');
const productRoute = require('./product.routes');
const saleRoute = require('./saleRoute.routes');
const userRoute = require('./user.routes');
const deliveryRoute = require('./delivery.routes');

module.exports = {
  loginRoute,
  registerRoute,
  productRoute,
  saleRoute,
  userRoute,
  deliveryRoute,
};
