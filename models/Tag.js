const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,       // Integer data type
      allowNull: false,              // Cannot be null
      primaryKey: true,              // Primary key
      autoIncrement: true,           // Auto-increment
    },
    tag_name: {
      type: DataTypes.STRING,        // String data type
      allowNull: true,               // Can be null.
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
