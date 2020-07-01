const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcryptjs");

// Generation du model
class User extends Model {}
User.init(
  {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role:  DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
    paranoid: true,
  }
);




User.addHook("beforeCreate", async (user, options) => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
});

// Many to Many
// User.belongsToMany(Article) => UserArticle => User.articles
// Article.belongsToMany(User) => UserArticle =>

// One to One
// User.hasOne(Basket);
// Basket.hasOne(User);

// MANY Users TO ONE Article
// User.belongsTo(Article) => User.article
// One Article TO MANY Users
// Article.hasMany(User) => Article.Users

// ONE User TO MANY Articles
//User.hasMany(Article); // User.articles
// MANY Articles TO ONE User
//Article.belongsTo(User); // Article.User



module.exports = User;
