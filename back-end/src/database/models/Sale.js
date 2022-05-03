module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    user_id: {
      type: DataTypes.INTEGER,
      foreinKey: true,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      foreinKey: true,
    },
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'sales'
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  };

  return Sales;
};
