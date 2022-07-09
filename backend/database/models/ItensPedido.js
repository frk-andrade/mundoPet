module.exports = (sequelize, DataType) => {
    const Item = sequelize.define('Item', {
      id: {
        type: DataType.INTEGER.UNSIGNED, // INT UNSIGNED
        primaryKey: true, // PRIMARY KEY
        autoIncrement: true, // AUTO_INCREMENT
        allowNull: false // NOT NULL
      },
      pedido_id: {
        type: DataType.INTEGER,
        allowNull: false
      },
      produto_id: {
        type: DataType.INTEGER,
        allowNull: false
      },
      quantidade: {
        type: DataType.INTEGER,
        allowNull: false
      },
      valor: {
        type: DataType.DECIMAL(10, 2),
        allowNull: false
      },
    },
      {
        tableName: 'itens_pedido',
        timestamps: false
      })
    return Item
    }