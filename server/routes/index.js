const UserRouter = require("./users");
const MerchantRouter = require("./merchants");
const CredentialRouter = require("./credentials");
const TransactionRouter = require("./transactions");
const SecurityRouter = require("./security");
const SecureRouter = require("./secureRoutes");
const verifyToken = require("../middlewares/verifyToken");

const routerManager = (app) => {
  app.use("/", SecurityRouter);
  
  app.use("/users", UserRouter);
  app.use("/merchants", MerchantRouter);
  
  app.use("/credentials", CredentialRouter);
  
  app.use("/transactions", TransactionRouter);
  app.use(verifyToken);
  app.use("/secure", SecureRouter);
};

module.exports = routerManager;
