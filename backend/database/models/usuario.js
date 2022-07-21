'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Pedido, {
        as: 'pedido'
      })
      Usuario.hasMany(models.Endereco, {
        as: 'endereco'
      })
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    }

  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};