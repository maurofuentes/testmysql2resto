const express = require("express");
const router = express.Router();
const platosController = require("../controllers/platosController");

router.get("/", platosController.getPlatos);

router.get('/:id', platosController.getPlato);

router.put('/', platosController.changePlatoPrice);

router.delete('/:id', platosController.deleteDishById);

router.post('/', platosController.addNewDish);

module.exports = router;
