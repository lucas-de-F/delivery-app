const { Sales } = require('../database/models');

const create = async (product) => {
  const result = await Sales.create(product);

  return result;
};

const read = async () => {
  const result = await Sales.findAll();
  // const result = await Sales.findAll({
  //   include: [
  //     {
  //       model: Product,
  //       as: 'products',
  //     },
  //   ],
  // });

  return result;
};

const update = async (id, product) => {
  const result = await Sales.update(product, { where: { id } });

  return result;
};

module.exports = {
  create,
  read,
  update,
};
