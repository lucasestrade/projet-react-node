const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
const User = require("./User");
const Transaction = require("./Transaction");
const Credential = require("./Credential");

// Generation du model
class Merchant extends Model {}
Merchant.init(
  {
    name: DataTypes.STRING,
    url_validation:  DataTypes.STRING,
    url_echec:  DataTypes.STRING,
    kbis: DataTypes.STRING,
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email is not valid",
        },
      },
    },
    adresse : DataTypes.STRING,
    repayment_currency: DataTypes.STRING,
    verify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Merchant",
    paranoid: true,
  }
);

// Many to Many
Merchant.belongsToMany(User,{
  through:"UserMerchant"
}) 
User.belongsToMany(Merchant,{
  through:"UserMerchant"
}) 

// MANY Clients TO ONE Article
// Client.belongsTo(Article) => Client.article
// One Article TO MANY Clients
// Article.hasMany(Client) => Article.Clients

// ONE Merchant TO MANY Transaction
Merchant.hasMany(Transaction); // Client.articles
// MANY Transaction TO ONE Merchant
Transaction.belongsTo(Merchant); // Article.Client

// ONE Merchant TO MANY Credential
Merchant.hasMany(Credential); // Client.articles
// MANY Credential TO ONE Merchant
Credential.belongsTo(Merchant); // Article.Client



module.exports = Merchant;
