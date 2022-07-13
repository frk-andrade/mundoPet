module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
      id: {
        type: DataType.INTEGER.UNSIGNED, // INT UNSIGNED
        primaryKey: true, // PRIMARY KEY
        autoIncrement: true, // AUTO_INCREMENT
        allowNull: false // NOT NULL
      },
      nome: {
        type: DataType.STRING(100),
        allowNull: false
      },
      descricao: {
        type: DataType.STRING(300),
        allowNull: false
      },
      preco: {
        type: DataType.DECIMAL(10,2),
        allowNull: false
      },
      promocao: {
        type: DataType.DECIMAL(10,2),
        allowNull: true
      },
      marca_id: {
        type: DataType.INTEGER,
        allowNull: false
      },
      categoria_id: {
        type: DataType.INTEGER,
        allowNull: false
      },
      imagem: {
        type: DataType.STRING(45),
        allowNull: false,
        defaultValue: 'imagemDefault.png'
      },
    },
      {
        tableName: 'produtos',
        timestamps: false
      })
    return Produto
    }