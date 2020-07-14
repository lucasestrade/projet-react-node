const Sequelize = require("sequelize");

const connection = new Sequelize('postgres://postgres:root@localhost:5433/dbreact');
connection
  .authenticate()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

module.exports = connection;