module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    userId: {
      type: DataTypes.INTEGER,
      foreinKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreinKey: true,
    },
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });

  Sales.associate = (model) => {
    Sales.belongsTo(model.User,
      {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    );
        Sales.belongsTo(model.User,
      {
        foreignKey: 'seller_id',
        as: 'seller',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    );
  };

  return Sales;
};
