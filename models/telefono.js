"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Telefono extends Model { }

const telefono = Telefono.init(
  {
    DNI: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    celular1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    celular2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: "Telefono",
    tableName: "telefono",
  }
);
module.exports = telefono;
