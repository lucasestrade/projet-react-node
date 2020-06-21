const Sequelize = require("sequelize");

const connection = new Sequelize('mysql://root:root@localhost:8889/dbreact');
connection
  .authenticate()
  .then(() => console.log("connected to PG"))
  .catch((err) => console.log(err));

module.exports = connection;