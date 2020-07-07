const UserRouter = require("./users");
const MerchantRouter = require("./merchants");
const CredentialRouter = require("./credentials");
const TransactionRouter = require("./transactions");
const SecurityRouter = require("./security");
const verifyToken = require("../middlewares/verifyToken");

const routerManager = (app) => {
  app.use("/", SecurityRouter);
  //app.use(verifyToken);
  app.use("/users", UserRouter);
  app.use("/merchants", MerchantRouter);
  app.use("/credentials", CredentialRouter);
  app.use("/transactions", TransactionRouter);
};

module.exports = routerManager;
