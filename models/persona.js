"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Persona extends Model { }

const persona = Persona.init(
  {
    DNI: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    fechaDeNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    ocupacion: DataTypes.STRING,
    genero: DataTypes.STRING,
    longitud: DataTypes.DOUBLE,
    latitud: DataTypes.DOUBLE,
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: "Persona",
    tableName: "persona",
  }
);
module.exports = persona;