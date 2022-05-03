module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'sales_products'
  });

  // SaleProduct.associate = (models) => {
  //   SaleProduct.belongsTo(models.Sales, {
  //     foreinKey: 'sale_id', as: 'sales',
  //     through: SaleProduct,
  //     otherKey: 'product_id'
  //   });
  // }

  // SaleProduct.associate = (models) => {
  //   SaleProduct.belongsTo(models.Product, {
  //     foreinKey: 'product_id', as: 'products',
  //     through: SaleProduct,
  //     otherKey: 'sale_id'
  //   });
  // }

  SaleProduct.associate = (models) => {
    models.Sales.belongsToMany(models.Sales, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Product.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }

  return SaleProduct;
};
