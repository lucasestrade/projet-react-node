const mongoose = require("mongoose");
const db = require("../lib/db");

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

const Transaction = db.model("Transaction", Schema);

module.exports = Transaction;
