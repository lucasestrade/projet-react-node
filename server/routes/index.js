//const SecurityRouter = require("./security");
const ClientRouter = require("./clients");
const BasketRouter = require("./baskets");
const BasketHistoryRouter = require("./basketsHistory");
const ProductRouter = require("./products");
const TraderRouter = require("./traders");
const ManagerRouter = require("./managers");
//const verifyToken = require("../middlewares/verifyToken");

const routerManager = (app) => {
    app.use("/")
  //app.use("/", SecurityRouter);
  //app.use(verifyToken);
  app.use("/clients", ClientRouter);
  app.use("/baskets", BasketRouter);
  app.use("/basketsHistory", BasketHistoryRouter);
  app.use("/products", ProductRouter);
  app.use("/traders", TraderRouter);
  app.use("/managers", ManagerRouter);
};

module.exports = routerManager;
