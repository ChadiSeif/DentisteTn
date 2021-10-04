const mongoose = require("mongoose");
const { Schema } = mongoose;

const medecinSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  speciality: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "medecin",
  },
});

module.exports = Medecin = mongoose.model("medecin", medecinSchema);
