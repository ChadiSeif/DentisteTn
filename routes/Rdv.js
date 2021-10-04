const express = require("express");
const router = express.Router();

const { Add, listeRdv, deleteRdv, updateRdv } = require("../controllers/Rdv");
const { userRdv } = require("../controllers/Rdv");
const { medecinRdv } = require("../controllers/Rdv");
const { validRdv, validation } = require("../Middlewares/RdvValidator");
const upload = require("../Middlewares/upload");
//bodyparser
router.use(express.json());

//@desc : add Rdv
//@method: POST
//@path : /RDV/Add
//@data : req.body

router.post("/Add", [upload.single("image")], validation, Add);
// validRdv(),

//@desc : get Rdv of users
//@method: GET
//@path : /RDV/getOne
//@data : req.body

router.get("/user/:id", userRdv);

//@desc : get Rdv of doctorrs
//@method: GET
//@path : /RDV/getOne
//@data :

router.get("/medecin/:id", medecinRdv);

//@desc : get Rdv
//@method: GET
//@path : /RDV/:id/Add
//@data :

router.get("/listRDV", listeRdv);

//@desc : delete Rdv
//@method: Delete
//@path : /RDV/Delete/:id
//@data :

router.delete("/deleteRdv/:id", deleteRdv);
module.exports = router;

//@desc : Update Rdv
//@method: PUT
//@path : /RDV/update/:id
//@data : req.body

router.put("/updateRdv/:id", updateRdv);
