const express = require("express");
const Basket = require("../models/sequelize/Basket");
const { ValidationError, Op } = require("sequelize");
//const verifyToken = require("../middlewares/verifyToken");
//const { Article } = require("../models/sequelize");
const router = express.Router();



// GET
router.get("/:id", (req, res) => {
  Basket.findByPk(req.params.id)
    .then((data) => (data ? res.json(data) : res.sendStatus(404)))
    .catch((err) => res.sendStatus(500));
});



// DELETE
router.delete("/:id", (req, res) => {
  Basket.destroy({
    where: { id: req.params.id },
  })
    .then((data) => (data ? res.sendStatus(204) : res.sendStatus(404)))
    .catch((err) => res.sendStatus(500));
});

module.exports = router;
