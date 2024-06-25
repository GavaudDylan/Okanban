import { Model, DataTypes } from "sequelize"; // Module NPM

import { sequelize } from "./dbClientSequelize.js"; // Module local

export class Card extends Model {}

Card.init(
  {
    content: {
      type: DataTypes.TEXT,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    color: {
      type: DataTypes.STRING(7),
    },
  },
  {
    sequelize,
    tableName: "card",
  }
);
