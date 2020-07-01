const sequelize = require("../../lib/sequelize");
const User = require("./User");
const Credential = require("./Credential");
const Transaction = require("./Transaction");
const Merchant = require("./Merchant");

sequelize
  .sync({ 
    alter: true ,
    force: true
  })
  .then((result) => console.log("Sync OK"))
  .catch((result) => console.error("Sync KO"));

module.exports = {
  sequelize,
  User,
  Credential,
  Transaction,
  Merchant,
};
