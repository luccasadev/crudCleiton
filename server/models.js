
import { Sequelize, DataTypes } from 'sequelize'


// Função assíncrona para inicializar o Sequelize e definir os modelos

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./server/api/db/dbUsers.sqlite",
  });

  // Definição do model 'users'
  export const usuarios = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: DataTypes.STRING,
      },
      inst: {
        type: DataTypes.STRING,
      },
      nifa: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      whatsapp: {
        type: DataTypes.STRING,
      },
      arroba: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      typeuser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.STRING,
      },
      updatedAt: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  // Sincronização do banco de dados
  await sequelize.sync(); // Aguarda a sincronização do banco de dados



