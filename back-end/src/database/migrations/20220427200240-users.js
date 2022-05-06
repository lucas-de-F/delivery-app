module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};
