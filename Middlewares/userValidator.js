const { body, validationResult } = require("express-validator");

exports.validregister = () => [
  body("prenom", "Merci d'ajouter votre nom").notEmpty(),
  body("nom", "Merci d'ajouter votre prénom").notEmpty(),
  body("numero", "Merci d'ajouter votre numero").notEmpty(),
  body("dateDeNaissance", "Merci d'ajouter votre date de naissance").notEmpty(),
  body("email", "Merci de corriger votre email").isEmail(),
  body("motdepass", "Merci d'ajouter votre mot de passe").isLength({ min: 3 }),
];

exports.validlogin = () => [
  body("email", "Merci d'entrer votre email").isEmail(),
  body("motdepass", "Merci d'entrer votre mot de passe").isLength({ min: 3 }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
