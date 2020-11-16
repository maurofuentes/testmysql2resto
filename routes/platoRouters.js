const express = require("express");
const router = express.Router();
const platosController = require("../controllers/platosController");

router.get("/", platosController.getPlatos);

router.get('/:id', platosController.getPlato);

router.post('/', platosController.getPlato);

module.exports = router;
