const { Sales, Product, SalesProducts } = require('../database/models');

const readOne = async (id) => Sales.findAll({ 
  include: [{ model: Product, as: 'products' }], where: { userId: id } });

const create = async (data) => {
  const { userId, sellerId,
    totalPrice, deliveryAddress, deliveryNumber, saleDate, products,
  } = data;

  const sale = await Sales.create({ 
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber, 
    saleDate, 
    status: 'pending',
    userId,
  });

    await SalesProducts.bulkCreate(products.map((product) => ({ ...product, saleId: sale.id })));

    const result = await readOne(userId);

  return result;
};

module.exports = {
  create,
  readOne,
};
