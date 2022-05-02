module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [
        {
          id: 1,
          name: 'Skol Lata 250ml',
          price: 2.20,
          url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
        },
        {
          id: 2,
          name: 'Heineken 600ml',
          price: 7.50,
          url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
        },
        {
          id: 3,
          name: 'Antarctica Pilsen 300ml',
          price: 2.49,
          url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
        }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
