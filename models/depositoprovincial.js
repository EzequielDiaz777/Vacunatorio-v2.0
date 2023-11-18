"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Depositoprovincial extends Model { }
const depositoprovincial = Depositoprovincial.init(
  {
    idDepositoProvincial: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    longitud: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    latitud: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: "Depositoprovincial",
    tableName: "depositoprovincial",
  }
);
module.exports = depositoprovincial;
