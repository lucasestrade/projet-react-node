const express = require("express");
//const sequelize = require("./lib/sequelize");
const { Client } = require("./models/sequelize");
const RouterManager = require("./routes");
const app = express();

app.use(express.json());

app.get("/hello", (req, res, next) => {
  console.log("ok");
});

app.listen(5000, () => console.log("listening..."));