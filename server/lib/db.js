const mongoose = require("mongoose");

mongoose
  .connect(
    'mongodb://localhost:27017/mongoreact',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to mongoDB"))
  .catch((e) => console.log(e));

module.exports = mongoose.connection;
