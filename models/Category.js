const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,      // Integer data type
      allowNull: false,             // Cannot be null
      primaryKey: true,             // Primary key
      autoIncrement: true           // Auto-increment
    },
    category_name: {
      type: DataTypes.STRING,       // String data type
      allowNull: false              // Cannot be null
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
