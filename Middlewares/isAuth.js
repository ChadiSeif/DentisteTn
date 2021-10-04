const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
  try {
    const tokentoverify = req.headers["authorization"];
    if (!tokentoverify) {
      return res
        .status(401)
        .send({ errors: [{ msg: " vous n'etes pas authentifié !" }] });
    }

    const decoded = jwt.verify(tokentoverify, process.env.SECRET_KEY);

    const userToFind = await User.findOne({ _id: decoded.id });
    if (!userToFind) {
      return res
        .status(401)
        .send({ errors: [{ msg: " vous n'etes pas authentifié !!" }] });
    }
    req.user = userToFind;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ errors: [{ msg: " vous n'etes pas authentifié !!!" }] });
  }
};
module.exports = isAuth;
