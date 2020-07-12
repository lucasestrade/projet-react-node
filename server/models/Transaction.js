const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    billing_adress: String,
    delivery_adress: String,
    status: String,
    price: Number,
  },
  {
    collection: "Transactions",
  }
);

const Transaction = mongoose.model("Transaction", Schema);

module.exports = Transaction;
