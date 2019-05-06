const sequelize = require('sequelize');

const Model = sequelize.Model;
const DataTypes = sequelize.DataTypes;
// class Product extends Model {}

/* Product.init(
  {
    StockKeepingUnit: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Barcode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Source: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Brand: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DisplayedName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    FullDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    tableName: 'Product',
    timestamps: false
  }
); */

module.exports = (sequelize, DataTypes) => {
  let Product = sequelize.define(
    'Product',
    {
      StockKeepingUnit: {
        type: DataTypes.STRING(100),
        primaryKey: true
      },
      Barcode: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      Source: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      Brand: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      DisplayedName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      FullDescription: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: 'Product',
      timestamps: false
    }
  );

  // Product.byCategory;
  Product.getById = () => {};

  return Product;
};
