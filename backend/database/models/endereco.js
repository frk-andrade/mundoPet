'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Endereco.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'usuario'
      })

    }
  }
  Endereco.init({
    usuario_id: DataTypes.INTEGER,
    alias: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cep: DataTypes.STRING,
    principal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'Endereco',
  });
  return Endereco;
};