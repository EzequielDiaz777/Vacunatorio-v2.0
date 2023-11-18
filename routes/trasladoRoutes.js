const express = require("express");
const router = express.Router();
const controllers = require("../controllers/indexController");


// Ruta para obtener todos los traslados
router.get("/", controllers.trasladoController.listarTraslados);
router.get("/crear", controllers.trasladoController.mostrarFormularioCreacionTraslado);
router.post("/", controllers.trasladoController.crearTrasladosDesdeFormulario);
router.get("/:id", controllers.trasladoController.editarTraslado);
router.put("/:id", controllers.trasladoController.updateTraslado);
router.delete("/:id", controllers.trasladoController.deleteTraslado);

module.exports = router;