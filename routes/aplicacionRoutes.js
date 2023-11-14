const express = require("express");
const router = express.Router();
const controllers = require("../controllers/indexController");

router.get("/", controllers.aplicacionController.getAllAplicaciones);
router.get("/crear", controllers.aplicacionController.crearAplicacion);
router.post("/", controllers.aplicacionController.createAplicacion);
router.get("/:id", controllers.aplicacionController.getAplicacionById);
router.put("/:id", controllers.aplicacionController.updateAplicacion);
router.delete("/:id", controllers.aplicacionController.deleteAplicacion);

module.exports = router;