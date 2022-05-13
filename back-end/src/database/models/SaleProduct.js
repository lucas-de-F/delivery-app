module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  SalesProducts.associate = (model) => {
    model.Sales.belongsToMany(
      model.Product, {
        as: 'products',
        through: SalesProducts,
        foreignKey: 'saleId',
        otherKey: 'productId',
      }
    );

    model.Product.belongsToMany(
      model.Sales, {
        as: 'sales',
        through: SalesProducts,
        foreignKey: 'productId',
        otherKey: 'saleId',
      }
    );
  };

  return SalesProducts;
};
