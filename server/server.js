const express = require("express");
const cors = require("cors");
//const sequelize = require("./lib/sequelize");
const { User } = require("./models/sequelize");
//const { Basket } = require("./models/sequelize");
//const { BasketHistory } = require("./models/sequelize");
//const { Trader } = require("./models/sequelize");
//const { Manager } = require("./models/sequelize");
const RouterManager = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/hello", (req, res, next) => {
  console.log("ok");
});

RouterManager(app);

app.listen(5000, () => console.log("listening..."));