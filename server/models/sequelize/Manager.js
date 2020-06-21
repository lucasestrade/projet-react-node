const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");

// Generation du model
class Manager extends Model {}
Manager.init(
  {
    firstname: DataTypes.STRING,
    lastname:  DataTypes.STRING,
    address:  DataTypes.STRING,
    city: DataTypes.STRING,
    Birthdate: DataTypes.DATE,
    BirthCity : DataTypes.STRING,
    country: DataTypes.STRING,
    Nationality: DataTypes.STRING,
    zip_code:  DataTypes.STRING,
    status: DataTypes.STRING,
    autorization_reference: DataTypes.STRING
  },
  {
    sequelize,
    modelName: "Manager",
    paranoid: true,
  }
);

// Many to Many
// Client.belongsToMany(Article) => ClientArticle => Client.articles
// Article.belongsToMany(Client) => ClientArticle =>

// MANY Clients TO ONE Article
// Client.belongsTo(Article) => Client.article
// One Article TO MANY Clients
// Article.hasMany(Client) => Article.Clients

// ONE Client TO MANY Articles
//Client.hasMany(Article); // Client.articles
// MANY Articles TO ONE Client
//Article.belongsTo(Client); // Article.Client



module.exports = Manager;
