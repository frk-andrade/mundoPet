module.exports = (sequelize, DataType) => {
    const Marca = sequelize.define('Marca', {
      id: {
        type: DataType.INTEGER.UNSIGNED, // INT UNSIGNED
        primaryKey: true, // PRIMARY KEY
        autoIncrement: true, // AUTO_INCREMENT
        allowNull: false // NOT NULL
      },
      nome: {
        type: DataType.STRING(50),
        allowNull: false
      },
    },
      {
        tableName: 'marcas',
        timestamps: false
      })
    return Marca
    }