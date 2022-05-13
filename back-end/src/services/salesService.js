const { Sales, Product, SalesProducts } = require('../database/models');
const { AppError } = require('../utils');

const findId = async (id) => Sales.findByPk(id, { 
  attributes: { exclude: ['user_id', 'seller_id'] },
  include: [{ model: Product, as: 'products' }],
});

const create = async (data) => {
  const { userId, sellerId,
    totalPrice, deliveryAddress, deliveryNumber, saleDate, products,
  } = data;

  const sale = await Sales.create({ 
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber, 
    saleDate,
    status: 'Pendente',
  });

    await SalesProducts.bulkCreate(products.map((product) => ({ ...product, saleId: sale.id })));

    const result = await findId(sale.id);

  return result;
};

const readOne = async (id, role) => {
  const result = await Sales.findAll(
    { 
      attributes: { exclude: ['user_id', 'seller_id'] },
      include: [{ 
        model: Product, as: 'products',
      }],
      where: { [role]: id },
    },
  );

  return result;
};

const partialUpdateDelivery = async (id, data) => {
  const findOneId = await findId(id);

  if (!findOneId) {
    throw AppError('notFound', 'Sale not Found');
  }

  const { status } = data;

  const result = await Sales.update(
    { status },
    { where: { id } },
  );

  return result;
};

module.exports = {
  create,
  readOne,
  partialUpdateDelivery,
};
