"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
class Agentedesalud extends Model { }

const agentedesalud = Agentedesalud.init(
  {
    DNI: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
    matricula: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    modelName: "Agentedesalud",
    tableName: "agentedesalud",
  }
);

Agentedesalud.prototype.toJSON = function () {
  return Object.assign({}, this.get());
};

module.exports = agentedesalud;
