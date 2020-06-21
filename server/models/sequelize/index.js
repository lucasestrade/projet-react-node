const sequelize = require("../../lib/sequelize");
const Client = require("./Client");
const Basket = require("./Basket");
const BasketHistory = require("./BasketHistory");
const Product = require("./Product");
const Trader = require("./Trader");
const Manager = require("./Manager");

sequelize
  .sync({ alter: true })
  .then((result) => console.log("Sync OK"))
  .catch((result) => console.error("Sync KO"));

module.exports = {
  sequelize,
  Product,
  Basket,
  BasketHistory,
  Client,
  Trader,
  Manager,
  
};
