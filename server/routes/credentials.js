const express = require("express");
const Credential = require("../models/sequelize/Credential");
const { ValidationError, Op } = require("sequelize");
//const verifyToken = require("../middlewares/verifyToken");
//const { Article } = require("../models/sequelize");
const router = express.Router();

// POST
router.post("/", (req, res) => {
  Credential.create(req.body)
    .then((data) => res.status(201).json(data))
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

  Credential.findAll({
    where: conditions,
    paranoid: false
  })
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(500));
});

// GET
router.get("/:id", (req, res) => {
  Credential.findByPk(req.params.id)
    .then((data) => (data ? res.json(data) : res.sendStatus(404)))
    .catch((err) => res.sendStatus(500));
});



// DELETE
router.delete("/:id", (req, res) => {
  Credential.destroy({
    where: { id: req.params.id },
  })
    .then((data) => (data ? res.sendStatus(204) : res.sendStatus(404)))
    .catch((err) => res.sendStatus(500));
});

module.exports = router;
