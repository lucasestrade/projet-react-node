const express = require("express");
const Transaction = require("../models/sequelize/Transaction");
const { ValidationError, Op } = require("sequelize");
//const verifyToken = require("../middlewares/verifyToken");
//const { Article } = require("../models/sequelize");
const router = express.Router();

// POST
router.post("/", (req, res) => {
    Transaction.create(req.body)
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

// GET
router.get("/:id", (req, res) => {
    Transaction.findByPk(req.params.id)
        .then((data) => (data ? res.json(data) : res.sendStatus(404)))
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
