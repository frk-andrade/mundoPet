'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produto.belongsTo(models.Marca, {
        foreignKey: 'marca_id',
        as: 'marca'
      })
      Produto.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id',
        as: 'categoria'
      })
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    preco: DataTypes.DECIMAL(10,2),
    promocao: DataTypes.DECIMAL(10,2),
    marca_id: DataTypes.INTEGER,
    categoria_id: DataTypes.INTEGER,
    imagem: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'imagemDefault.png'
    },
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};