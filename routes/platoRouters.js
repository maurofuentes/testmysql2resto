const express = require("express");
const router = express.Router();
const platosController = require("../controllers/platos.controller");

router.get("/", platosController.getPlatos);

module.exports = router;
