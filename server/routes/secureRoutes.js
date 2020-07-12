const express = require("express");
const createToken = require("../lib/auth").createToken;
const Transaction = require("../models/sequelize/Transaction");
//const Merchant = require("../models/sequelize/Merchant");
//const Credential = require("../models/sequelize/Credential");
//const { ValidationError, Op } = require("sequelize");
//const verifyToken = require("../middlewares/verifyToken");
//const { Article } = require("../models/sequelize");
const router = express.Router();



// PUT
router.put("/transactions/:id", async (req, res) => {
  if(req.body.password){
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  Transaction.update(req.body, { returning: true, where: { id: req.params.id } })
  .then(res.json({status:"updated"}))
    .catch((err) => res.sendStatus(500));
});



module.exports = router;
