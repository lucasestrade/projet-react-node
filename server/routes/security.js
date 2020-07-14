const createToken = require("../lib/auth").createToken;
const express = require("express");
const router = express.Router();
const User = require("../models/sequelize/User");
const Merchant = require("../models/sequelize/Merchant");
const Credential = require("../models/sequelize/Credential");
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
        resUser=data;
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
        res.json({ 
          isConnected: true,
          token : token,
          id: resUser.id
        })
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

// POST
router.post("/login_merchant_check", (req, res) => {
  const { email, password } = req.body;

  Merchant.findOne({
    where: { email },
  })
    .then((data) => {
      if (!data || !data.verify) {
        return Promise.reject("invalid");
      } else {
        resMerchant=data;
        return bcrypt.compare(password, data.password).then((valid) => {
          if (!valid) {
            return Promise.reject("invalid");
          } else {
            return Promise.resolve(data);
          }
        });
      }
    })
    .then((merchant) =>
      createToken({ username: merchant.email }).then((token) => {
        if(resMerchant.id){
          res.json({
            isConnected: true,
            token : token,
            id: resMerchant.id
          })
        }else{
          res.json({ 
            isConnected: false
          })
        }
      }
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

// POST
router.post("/credential_check", (req, res) => {
  const { client_token, client_secret } = req.body;

  Credential.findOne({
    where: { client_token : client_token,client_secret : client_secret },
  })
    .then((data) => {
      if (!data) {
        return Promise.reject("invalid");
      } else {
        return Promise.resolve(data);
      }
    })
    .then((credential) =>
      createToken({ client_token: credential.client_token }).then((token) =>
        res.json({ token })
      )
    )
    .catch((err) =>
      err === "invalid"
        ? res.status(400).json({
            client_token: "Invalid credentials",
            client_secret: "Invalid credentials",
          })
        : console.error(err) || res.sendStatus(500)
    );
});




module.exports = router;
