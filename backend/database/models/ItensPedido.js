'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItensPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItensPedido.belongsTo(models.Pedido, {
        foreignKey: 'pedido_id',
        as: 'pedido'
      })
      ItensPedido.belongsTo(models.Produto, {
        foreignKey: 'produto_id',
        as: 'produto'
      })
    }
  }
  ItensPedido.init({
    pedido_id: DataTypes.INTEGER,
    produto_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10, 2),
}, {
    sequelize,
    modelName: 'ItensPedido',
  });
  return ItensPedido;
};