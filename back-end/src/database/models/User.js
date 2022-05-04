module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false, tableName: 'users' });

  User.associate = (model) => {
    User.hasMany(model.Sales, { foreignKey: 'user_id', as: 'user' });
    User.hasMany(model.Sales, { foreignKey: 'seller_id', as: 'seller' });
  };

  return User;
};
