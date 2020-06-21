const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
//const Article = require("./Article");

// Generation du model
class BasketHistory extends Model {}
BasketHistory.init(
  {
    date: DataTypes.DATE,
    status: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "BasketHistory",
    paranoid: true,
  }
);




module.exports = BasketHistory;