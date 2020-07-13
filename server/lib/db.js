const mongoose = require("mongoose");

mongoose
    .connect(
        `mongodb://user:password@mongo`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.MONGODB_DBNAME,
        }
    )
    .then(() => console.log("connected to mongoDB"))
    .catch((e) => console.log(e));

module.exports = mongoose.connection;