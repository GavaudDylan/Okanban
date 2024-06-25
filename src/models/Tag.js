import { Model, DataTypes } from "sequelize"; // Module NPM

import { sequelize } from "./dbClientSequelize.js"; // Module local

export class Tag extends Model {}

Tag.init(
  {
    name: {
      type: DataTypes.TEXT,
    },
    color: {
      type: DataTypes.STRING(7),
    },
  },
  {
    sequelize,
    tableName: "tag",
  }
);

Tag.findAll();
