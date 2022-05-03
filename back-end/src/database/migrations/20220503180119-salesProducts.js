module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_products', {
      sale_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('sales_products');
  }
};
