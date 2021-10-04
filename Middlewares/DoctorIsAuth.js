var jwt = require("jsonwebtoken");
const Medecin = require("../models/Medecin");

const DoctorIsAuth = async (req, res, next) => {
  try {
    tokentoverify = req.headers["authorization"];
    if (!tokentoverify) {
      res
        .status(401)
        .send({ errors: [{ msg: " vous n'etes pas authentifié !" }] });
    }
    const decoded = jwt.verify(tokentoverify, process.env.SECRET_KEY);
    const Doctortofind = await Medecin.findOne({ _id: decoded.id });
    if (!Doctortofind) {
      return res
        .status(401)
        .send({ errors: [{ msg: " vous n'etes pas authentifié !!" }] });
    }
    req.user = Doctortofind;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: " vous n'etes pas authentifié !!!" }] });
  }
};

module.exports = DoctorIsAuth;
