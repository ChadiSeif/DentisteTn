const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  dateDeNaissance: {
    type: String,
    required: true,
  },
  raison: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  motdepass: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

module.exports = User = mongoose.model("user", userSchema);
