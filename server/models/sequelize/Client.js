const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
const Basket = require("./Basket");

// Generation du model
class Client extends Model {}
Client.init(
  {
    firstname: DataTypes.STRING,
    lastname:  DataTypes.STRING,
    address:  DataTypes.STRING,
    facturation_address:  DataTypes.STRING,

    city:  DataTypes.STRING,
    country:  DataTypes.STRING,
    zip_code:  DataTypes.STRING,
    delivery_method:  DataTypes.STRING,
    phone:  DataTypes.STRING,
    mail:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email is not valid",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "Client",
    paranoid: true,
  }
);

// Many to Many
// Client.belongsToMany(Article) => ClientArticle => Client.articles
// Article.belongsToMany(Client) => ClientArticle =>

// One to One
 Client.hasOne(Basket);
 Basket.hasOne(Client);

// MANY Clients TO ONE Article
// Client.belongsTo(Article) => Client.article
// One Article TO MANY Clients
// Article.hasMany(Client) => Article.Clients

// ONE Client TO MANY Articles
//Client.hasMany(Article); // Client.articles
// MANY Articles TO ONE Client
//Article.belongsTo(Client); // Article.Client



module.exports = Client;
