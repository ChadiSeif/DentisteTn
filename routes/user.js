const express = require("express");
const router = express.Router();
const User = require("../models/User");

const {
  register,
  login,
  current,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const {
  validregister,
  validation,
  validlogin,
} = require("../Middlewares/userValidator");
const isAuth = require("./../Middlewares/isAuth");

//bodyparser
router.use(express.json());

//@desc : Register
//@method: POST
//@path: /Register
//@data : req.body

router.post("/Register", validregister(), validation, register);

//@desc : Login
//@method: POST
//@path: /Login
//@data : req.body

router.post("/Login", validlogin(), validation, login);

//@desc : Current_User
//@method: GET
//@path: /current
//@data : req.body

router.get("/Current", isAuth, current);

//@desc : Update_User
//@method: PUT
//@path: /updateuser
//@data : req.body
router.put("/updateuser/:id", updateUser);

//@desc : Delete_User
//@method: delete
//@path: /deleteuser
//@data : req.body
router.delete("/deleteuser/:id", updateUser);

module.exports = router;
