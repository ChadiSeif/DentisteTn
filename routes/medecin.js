const express = require("express");
const {
  registermedecin,
  loginmedecin,
  currentMedecin,
  getlist,
  getOneDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/medecin");
const DoctorIsAuth = require("../Middlewares/DoctorIsAuth");
const {
  validregister,
  validation,
  validlogin,
} = require("../Middlewares/medecinValidator");
const isAuth = require("./../Middlewares/isAuth");
const router = express.Router();

//bodyparser
router.use(express.json());

//@desc : Register
//@method: POST
//@path: /Registerdoctor
//@data : req.body

router.post("/Registerdoctor", validregister(), validation, registermedecin);

//@desc : Login
//@method: POST
//@path: /Logindoctor
//@data : req.body
router.post("/Loginmedecin", validlogin(), validation, loginmedecin);

//@desc : Current
//@method: Get
//@path: /Doctor
//@data :
router.get("/Doctor", DoctorIsAuth, currentMedecin);

//@desc : Current
//@method: Get
//@path: /doctorlist
//@data :
router.get("/Doctorlist", getlist);

//@desc : Current
//@method: GetoneDoctor
//@path: /Doctor/:id
//@data : req
router.get("/onedoctor/:id", getOneDoctor);

//@desc : Update
//@method: updateDoctor
//@path: /updatedoctor/:id
//@data : req
router.put("/updatedoctor/:id", updateDoctor);

//@desc : Update
//@method: updateDoctor
//@path: /updatedoctor/:id
//@data : req
router.delete("/deletedoctor/:id", deleteDoctor);

module.exports = router;
