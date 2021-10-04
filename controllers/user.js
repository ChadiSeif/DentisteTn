const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { nom, prenom, numero, dateDeNaissance, raison, email, motdepass } =
      req.body;

    ///check email

    const usertoFind = await User.findOne({ email });
    if (usertoFind) {
      return res.status(400).send({
        errors: [
          {
            msg: "Utilisateur deja inscrit ! merci de vous connecter pour la prise de rendez-vous",
          },
        ],
      });
    }
    const newuser = new User({
      nom,
      prenom,
      numero,
      dateDeNaissance,
      raison,
      email,
      motdepass,
    });

    // hashing the password
    const salt = 10;
    const hashedmotdepass = await bcrypt.hash(motdepass, salt);
    newuser.motdepass = hashedmotdepass;

    //Generate Token

    await newuser.save();

    const token = jwt.sign({ id: newuser._id }, process.env.SECRET_KEY);
    res
      .status(200)
      .send({ msg: "utilisateur est bien enregistré", newuser, token });
  } catch (error) {
    res.status(400).send({
      errors: [{ msg: " Prise de rendez vous non effectuée !" }],
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, motdepass } = req.body;

    ///test email
    const userToFind = await User.findOne({ email });
    if (!userToFind) {
      res.status(400).send({ errors: [{ msg: "Informations non valides" }] });
    }

    console.log(userToFind);

    const token = jwt.sign({ id: userToFind._id }, process.env.SECRET_KEY);

    // verif motdepass
    const isMatch = await bcrypt.compare(motdepass, userToFind.motdepass);
    console.log(isMatch);
    if (isMatch) {
      res.status(200).send({ msg: "Succes", userToFind, token });
    } else {
      res.status(400).send({ errors: [{ msg: "Informations non valides" }] });
    }
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "erreur d'authentification" }] });
  }
};

exports.current = (req, res) => {
  res.send(req.user);
};

exports.updateUser = userid = async (req, res) => {
  try {
    const userid = req.params.id;
    const userupdated = req.body;
    const result = await User.updateOne(
      { _id: userid },
      { $set: { ...userupdated } }
    );
    res.status(200).send({ msg: "Vos informations sont bien modifiés" });
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "update failed..." }] });
  }
};

exports.deleteUser = userid = async (req, res) => {
  try {
    const userid = req.params.id;
    await User.deleteOne({ _id: userid });
    res.status(200).send({ msg: "Compte supprimé !" });
  } catch (error) {
    res.status(401).send({ msg: "Compte ne peut pas etre supprimé " });
  }
};
