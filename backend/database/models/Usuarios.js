module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
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
      sobrenome: {
        type: DataType.STRING(50),
        allowNull: false
      },
      email: {
        type: DataType.STRING(100),
        allowNull: false
      },
      senha: {
        type: DataType.STRING(45),
        allowNull: false
      },
      telefone: {
        type: DataType.STRING(11),
        allowNull: true
      },
      cpf: {
        type: DataType.STRING(11),
        allowNull: true
      },
      admin: {
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
      {
        tableName: 'usuarios',
        timestamps: false
      })
    return Usuario
    }