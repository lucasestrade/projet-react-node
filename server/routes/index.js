//const SecurityRouter = require("./security");
const UserRouter = require("./users");
const MerchantRouter = require("./credentials");
const CredentialRouter = require("./credentials");
const TransactionRouter = require("./transactions");
//const verifyToken = require("../middlewares/verifyToken");

const routerManager = (app) => {
    app.use("/")
  //app.use("/", SecurityRouter);
  //app.use(verifyToken);
  app.use("/users", ClientRouter);
  app.use("/merchants", BasketRouter);
  app.use("/credentials", BasketHistoryRouter);
  app.use("/transactions", ProductRouter);
};

module.exports = routerManager;
