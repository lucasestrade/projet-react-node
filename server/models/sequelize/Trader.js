const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
const Manager = require("./Manager");
const bcrypt = require("bcryptjs");

// Generation du model
class Trader extends Model {}
Trader.init(
  {
    name: DataTypes.STRING,
    mail:  DataTypes.STRING,
    contact:  DataTypes.STRING,
    url_confirmation:  DataTypes.STRING,
    url_cancellation:  DataTypes.STRING,
    currency:  DataTypes.FLOAT,
    client_token: DataTypes.STRING,
    secret_token: DataTypes.STRING,
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    status: DataTypes.STRING,

    
  },
  {
    sequelize,
    modelName: "Trader",
    paranoid: true,
  }
);

// Many to Many
// Trader.belongsToMany(Article) => TraderArticle => Trader.articles
// Article.belongsToMany(Trader) => TraderArticle =>

// One to One
 Trader.hasOne(Manager);
 Manager.hasOne(Trader);

// MANY Traders TO ONE Article
// Trader.belongsTo(Article) => Trader.article
// One Article TO MANY Traders
// Article.hasMany(Trader) => Article.Traders

// ONE Trader TO MANY Articles
//Trader.hasMany(Article); // Trader.articles
// MANY Articles TO ONE Trader
//Article.belongsTo(Trader); // Article.Trader

Trader.addHook("beforeCreate", async (user, options) => {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
});



module.exports = Trader;
