const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,        // Integer data type
      allowNull: false,               // Cannot be null
      primaryKey: true,               // Primary key
      autoIncrement: true,            // Auto-increment
    },
    product_id: {
      type: DataTypes.INTEGER,        // Integer data type
      references: {                   // Foreign key reference
        model: 'product',             // Reference to 'product' model
        key: 'id',                    // Key in the 'product' model to reference
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,        // Integer data type
      references: {                   // Foreign key reference
        model: 'tag',                 // Reference to 'tag' model
        key: 'id',                    // Key in the 'tag' model to reference
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
