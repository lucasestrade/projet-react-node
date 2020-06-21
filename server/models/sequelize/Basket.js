const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
const Product = require("./Product");
const BasketHistory = require("./BasketHistory");


// Generation du model
class Basket extends Model {}
Basket.init(
  {
    total: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
    status_colis: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Basket",
    paranoid: true,
  }
);



// One to One
Basket.hasOne(BasketHistory);
BasketHistory.hasOne(Basket);

// Many to Many
Basket.belongsToMany(Product, {
    through: 'BasketProduct',
    as: 'products',
    foreignKey: 'basketId'
  })
Product.belongsToMany(Basket, {
    through: 'BasketProduct',
    as: 'baskets',
    foreignKey: 'productId'
  })


module.exports = Basket;