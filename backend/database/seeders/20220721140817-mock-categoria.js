'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Categorias', [{
      nome: 'Cachorro',
      link: 'cachorro',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        nome: 'Gato',
        link: 'gato',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Peixe',
        link: 'peixe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pássaro',
        link: 'passaro',
        createdAt: new Date(),
        updatedAt: new Date()
      }
], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
