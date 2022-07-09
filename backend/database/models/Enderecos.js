module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define('Endereco', {
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
      alias: {
        type: DataType.STRING(20),
        allowNull: true
      },
      endereco: {
        type: DataType.STRING(150),
        allowNull: false
      },
      numero: {
        type: DataType.STRING(10),
        allowNull: false
      },
      complemento: {
        type: DataType.STRING(20),
        allowNull: true
      },
      bairro: {
        type: DataType.STRING(45),
        allowNull: false
      },
      cidade: {
        type: DataType.STRING(45),
        allowNull: false
      },
      estado: {
        type: DataType.STRING(2),
        allowNull: false
      },
      cep: {
        type: DataType.STRING(8),
        allowNull: false
      },
      principal: {
        type: DataType.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
      {
        tableName: 'enderecos',
        timestamps: false
      })
    return Endereco
    }