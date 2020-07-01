const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");

// Generation du model
class Transaction extends Model {}
Transaction.init(
  {
    billing_adress: DataTypes.STRING,
    delivery_adress: DataTypes.STRING,
    status: DataTypes.STRING,
    price: DataTypes.FLOAT,
  },
  {
    sequelize,
    modelName: "Transaction",
    paranoid: true,
  }
);



module.exports = Transaction;