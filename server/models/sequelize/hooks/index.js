const denormalize = require("./denormalizationTransaction");
const Transaction = require("../Transaction");
const Merchant = require("../Merchant");

const onHookTransaction = (merchant) => denormalize(Transaction, merchant.id);

Merchant.addHook("afterCreate", onHookTransaction);
Merchant.addHook("afterUpdate", onHookTransaction);
Merchant.addHook("afterDestroy", onHookTransaction);