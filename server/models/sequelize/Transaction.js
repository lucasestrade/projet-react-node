const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
const denormalize = require("./hooks/denormalizationTransaction");

// Generation du model
class Transaction extends Model {}
Transaction.init(
  {
    billing_adress: DataTypes.STRING,
    delivery_adress: DataTypes.STRING,
    status: DataTypes.STRING,
    price: DataTypes.FLOAT,
    date: DataTypes.DATEONLY,
  },
  {
    sequelize,
    modelName: "Transaction",
    paranoid: true,
  }
);

Transaction.addHook("afterCreate", (transaction) => {
  denormalize(Transaction, transaction.id, "create");
});
Transaction.addHook("afterUpdate", (transaction) => {
  denormalize(Transaction, transaction.id, "update");
});
Transaction.addHook("afterDestroy", (transaction) => {
  denormalize(Transaction, transaction.id, "delete");
});


module.exports = Transaction;