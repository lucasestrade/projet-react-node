const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
const Basket = require("./Basket");

// Generation du model
class Product extends Model {}
Product.init(
  {
    reference: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Product",
    paranoid: true,
  }
);



module.exports = Product;