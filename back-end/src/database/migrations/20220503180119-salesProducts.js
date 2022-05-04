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
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
