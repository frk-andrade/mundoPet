'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
      preco: {
        type: Sequelize.DECIMAL(10,2)
      },
      promocao: {
        type: Sequelize.DECIMAL(10,2)
      },
      marca_id: {
        type: Sequelize.INTEGER,
        refereces: {
          model: 'Marcas',
          key: 'id'
        }
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        refereces: {
          model: 'Categorias',
          key: 'id'
        }
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'imagemDefault.png'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};