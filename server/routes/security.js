const createToken = require("../lib/auth").createToken;
const express = require("express");
const router = express.Router();
const User = require("../models/sequelize/User");
const bcrypt = require("bcryptjs");

// POST
router.post("/login_check", (req, res) => {
  const { email, password } = req.body;

  User.findOne({
    where: { email },
  })
    .then((data) => {
      if (!data) {
        return Promise.reject("invalid");
      } else {
        return bcrypt.compare(password, data.password).then((valid) => {
          if (!valid) {
            return Promise.reject("invalid");
          } else {
            return Promise.resolve(data);
          }
        });
      }
    })
    .then((user) =>
      createToken({ username: user.email }).then((token) =>
        res.json({ token })
      )
    )
    .catch((err) =>
      err === "invalid"
        ? res.status(400).json({
            email: "Invalid credentials",
            password: "Invalid credentials",
          })
        : console.error(err) || res.sendStatus(500)
    );
});




module.exports = router;
