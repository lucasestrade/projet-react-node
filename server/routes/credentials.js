const express = require("express");
const Credential = require("../models/sequelize/Credential");
const { ValidationError, Op } = require("sequelize");
//const verifyToken = require("../middlewares/verifyToken");
//const { Article } = require("../models/sequelize");
const router = express.Router();



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
