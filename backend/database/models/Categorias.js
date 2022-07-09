module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define('Categoria', {
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
      link: {
        type: DataType.STRING(50),
        allowNull: false
      },
    },
      {
        tableName: 'categorias',
        timestamps: false
      })
    return Categoria
    }