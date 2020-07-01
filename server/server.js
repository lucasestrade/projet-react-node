const express = require("express");
//const sequelize = require("./lib/sequelize");
const { User } = require("./models/sequelize");
//const { Basket } = require("./models/sequelize");
//const { BasketHistory } = require("./models/sequelize");
//const { Trader } = require("./models/sequelize");
//const { Manager } = require("./models/sequelize");

const RouterManager = require("./routes");
const app = express();

app.use(express.json());

app.get("/hello", (req, res, next) => {
  console.log("ok");
});

app.listen(5000, () => console.log("listening..."));