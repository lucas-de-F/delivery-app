module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('products');
  }
};
