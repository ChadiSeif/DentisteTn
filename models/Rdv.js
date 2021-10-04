const mongoose = require("mongoose");
const User = require("./User");
const Medecin = require("./Medecin");
const { Schema } = mongoose;

const RDVschema = new Schema({
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  consulting: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  RdvUpdate: {
    type: Boolean,
    default: false,
  },
  RdvUpdateHour: {
    type: String,
    default: "",
  },
  RdvUpdateDate: {
    type: String,
    default: "",
  },
  RdvUpdateConfirm: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "user",
  },
  medecin: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "medecin",
  },
  image: {
    type: String,
  },
});

module.exports = Rdv = mongoose.model("rdv", RDVschema);
