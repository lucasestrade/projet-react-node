const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      "MyBestSecret",
      {
        algorithm: "HS256",
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) {
          console.error(err);
          reject();
        } else {
          resolve(token);
        }
      }
    );
  });
};

const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "MyBestSecret", (err, decodedToken) => {
      if (err) {
        reject();
      } else {
        resolve(decodedToken);
      }
    });
  });
};

module.exports = {
  createToken,
  verifyToken,
};
