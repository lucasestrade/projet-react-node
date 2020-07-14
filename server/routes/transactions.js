const express = require("express");
const sequelize = require("../lib/sequelize");
const { QueryTypes } = require("sequelize");
const Transaction = require("../models/sequelize/Transaction");
const Merchant = require("../models/sequelize/Merchant");
const { ValidationError, Op } = require("sequelize");
const TransactionMongo = require("../models/Transaction");
//const verifyToken = require("../middlewares/verifyToken");
//const { Article } = require("../models/sequelize");
const router = express.Router();
const bcrypt = require("bcryptjs");

// POST
router.post("/", (req, res) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  date = yyyy + '-' + mm + '-' + dd;
  Transaction.create(
      {
        status:req.body.status,
        price:req.body.price,
        MerchantId:req.body.MerchantId,
        date: date
      }
    )
    .then((data) => {
        res_trans = data;
        Merchant.findByPk(req.body.MerchantId)
        .then((data) => {
            res_trans ? res.json({
              id: res_trans.id,
              status: res_trans.status,
              price: res_trans.price,
              date: res_trans.date,
              MerchantId : res_trans.MerchantId,
              url_validation: data.url_validation,
              url_echec: data.url_echec
            }) : res.sendStatus(404)
          }
        )
        .catch((err) => res.sendStatus(500));
      }
    )
    .catch((error) => {
      if (error instanceof ValidationError) {
        console.log(error.errors);
        const errors = error.errors.reduce((acc, item) => {
          acc[item.path] = [...(acc[item.path] || []), item.message];
          return acc;
        }, {});
        res.status(400).json(errors);
      } else {
        res.sendStatus(500);
      }
    });
});

// CGET
router.get("/", (req, res) => {
  const { name, transaction: transactionConditions, credential: credentialConditions, ...conditions } = req.query;
  if (name) {
    conditions.name = { [Op.startsWith]: req.query.name };
  }
  console.log(conditions);

  Transaction.findAll({
    where: conditions,
    paranoid: false
  })
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(500));
});

// GET
router.get("/stats", (req, res) => {
  const { merchantId } = req.query;
  if(merchantId){
    var requete = Transaction.findAll({
      where:{
        MerchantId: merchantId,
      },
      paranoid: false
    });
  }else{
    var requete = Transaction.findAll();
  }
  requete
    .then((data) => {
      var prices = [];
      var dates = [];
      data.forEach((transaction) => {
        prices.push(transaction.price);
        dates.push(transaction.date);
      })
      res.json({
        prices:prices,
        dates:dates
      });

    })
    .catch((err) => res.sendStatus(500));
});

// GET
router.get("/:id", (req, res) => {
  Transaction.findByPk(req.params.id)
    .then((data) => (data ? res.json(data) : res.sendStatus(404)))
    .catch((err) => res.sendStatus(500));
});

// GET
router.get("/mongo/:id", (req, res) => {
  TransactionMongo.findById(req.params.id).then((data) => res.json(data));
});


// GET
router.get("/stats/date", (req, res) => {
  sequelize.query("SELECT COUNT(*) as nb,date FROM `Transactions` GROUP BY date", { type: QueryTypes.SELECT })
    .then((data) => {
      console.log(res.json(data));
      data ? res.json(data) : res.sendStatus(404);
    })
    .catch((err) => res.sendStatus(500));
});

// PUT
router.put("/:id", async (req, res) => {
  if(req.body.password){
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  Transaction.update(req.body, { returning: true, where: { id: req.params.id } })
  .then(res.json({status:"updated"}))
    .catch((err) => res.sendStatus(500));
});

// DELETE
router.delete("/:id", (req, res) => {
  Transaction.destroy({
    where: { id: req.params.id },
  })
    .then((data) => (data ? res.sendStatus(204) : res.sendStatus(404)))
    .catch((err) => res.sendStatus(500));
});

module.exports = router;
