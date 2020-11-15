const express = require("express");
const router = express.Router();
const platosController = require("../controllers/platosController");

router.get("/", platosController.getPlatos);

module.exports = router;
