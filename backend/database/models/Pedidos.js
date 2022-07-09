module.exports = (sequelize, DataType) => {
    const Pedido = sequelize.define('Pedido', {
      id: {
        type: DataType.INTEGER.UNSIGNED, // INT UNSIGNED
        primaryKey: true, // PRIMARY KEY
        autoIncrement: true, // AUTO_INCREMENT
        allowNull: false // NOT NULL
      },
      usuario_id: {
        type: DataType.INTEGER,
        allowNull: false
      },
      data: {
        type: DataType.DATEONLY,
        allowNull: false
      },
      frete: {
        type: DataType.DECIMAL(10, 2),
        allowNull: false
      },
      valor_total: {
        type: DataType.DECIMAL(10, 2),
        allowNull: false
      },
    },
      {
        tableName: 'pedidos',
        timestamps: false
      })
    return Pedido
    }