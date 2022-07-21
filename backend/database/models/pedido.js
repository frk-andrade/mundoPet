'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'usuario'
      })
    }
  }
  Pedido.init({
    usuario_id: DataTypes.INTEGER,
    data: DataTypes.DATEONLY,
    frete: DataTypes.DECIMAL(10, 2),
    valor_total: DataTypes.DECIMAL(10, 2),
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};