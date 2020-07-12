const TransactionMongo = require("../../Transaction");


const denormalize = async (ModelPG, transactionID, operation) => {
  // Delete in mongo
  await TransactionMongo.deleteOne({ id: transactionID });

  if (operation !== "delete") {
    // Get Transaction with association in DB if not delete
    const dTransaction = await ModelPG.findOne({
      where: { id: transactionID },
    });

    // Save in mongo
    const mTransaction = new TransactionMongo(dTransaction.toJSON());
    await mTransaction.save();
  }
};

module.exports = denormalize;
