const TransactionMongo = require("../../Transaction");
const Merchant = require("../Merchant");

const denormalize = async (ModelPG, transactionId, operation) => {
    // Delete in mongo
    await TransactionMongo.deleteOne({ id: transactionId });

    if (operation !== "delete") {
        // Get User with association in DB if not delete
        const dTransaction = await ModelPG.findOne({
            where: { id: transactionId },
            include: [
                Merchant,
            ],
        });

        // Save in mongo
        const mTransaction = new TransactionMongo(dTransaction.toJSON());
        await mTransaction.save();
    }
};

module.exports = denormalize;
