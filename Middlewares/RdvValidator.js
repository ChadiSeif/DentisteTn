const { body, validationResult } = require("express-validator");

exports.validRdv = () => [
  body("date", "Prière d'ajouter la date du rendez-vous").notEmpty(),
  body("hour", "Prière d'ajouter l'heure du rendez-vous").notEmpty(),
  body(
    "consulting",
    "Prière d'ajouter le motif de votre consultation"
  ).notEmpty(),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
