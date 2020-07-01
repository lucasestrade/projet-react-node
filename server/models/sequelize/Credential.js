const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");

// Generation du model
class Credential extends Model {}
Credential.init(
  {
    client_token: DataTypes.STRING,
    client_secret:  DataTypes.STRING,
    

    
  },
  {
    sequelize,
    modelName: "Credential",
    paranoid: true,
  }
);

// Many to Many
// Credential.belongsToMany(Article) => CredentialArticle => Credential.articles
// Article.belongsToMany(Credential) => CredentialArticle =>

// One to One
// Credential.hasOne(Manager);
// Manager.hasOne(Credential);

// MANY Credentials TO ONE Article
// Credential.belongsTo(Article) => Credential.article
// One Article TO MANY Credentials
// Article.hasMany(Credential) => Article.Credentials

// ONE Credential TO MANY Articles
//Credential.hasMany(Article); // Credential.articles
// MANY Articles TO ONE Credential
//Article.belongsTo(Credential); // Article.Credential




module.exports = Credential;
