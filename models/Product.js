// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,        // Integer data type
      allowNull: false,               // Cannot be null
      primaryKey: true,               // Primary key
      autoIncrement: true,            // Auto-increment
    },
    product_name: {
      type: DataTypes.STRING,         // String data type
      allowNull: false                // Cannot be null
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Decimal data type with precision 10 and scale 2
      allowNull: false,               // Cannot be null
      validate: {
        isDecimal: true,              // Validation to ensure it's a decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER,        // Integer data type
      allowNull: false,               // Cannot be null
      defaultValue: 10,               // Default value set to 10
      validate: {
        isNumeric: true,              // Validation to ensure it's numeric
      },
    },
    category_id: {
      type: DataTypes.INTEGER,        // Integer data type
      references: {                   // Foreign key reference
        model: 'category',            // Reference to 'category' model
        key: 'id',                    // Key in the 'category' model to reference
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
