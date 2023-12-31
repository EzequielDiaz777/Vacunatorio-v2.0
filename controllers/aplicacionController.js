const {
  Aplicacion,
  Persona,
  AgenteDeSalud,
  LoteInterno,
} = require("../models/relaciones");

// Obtener todas las aplicaciones
const getAllAplicaciones = async (req, res) => {
  try {
    const aplicaciones = await Aplicacion.findAll({
      raw: true
    });
    const lotes = await LoteInterno.findAll({
      raw: true
    });
    const personas = await Persona.findAll({
      raw: true
    });
    const agentes = await AgenteDeSalud.findAll({
      raw: true
    });
    res.render("aplicacion/viewAplicacion", {
      aplicaciones: aplicaciones,
      lotes: lotes,
      personas: personas,
      agentes: agentes,
    })
  } catch (error) {
    res.status(500).json({ message: "Error al crear la persona.", error: error.message });
  }
};

const crearAplicacion = async (req, res) => {
  try {
    const lotes = await LoteInterno.findAll();
    const personas = await Persona.findAll();
    const agentes = await AgenteDeSalud.findAll();
    res.render("aplicacion/formAplicacion", {
      lotes: lotes,
      personas: personas,
      agentes: agentes,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la persona.", error: error.message });
  }
}

// Crear una nueva aplicación
const createAplicacion = async (req, res) => {
  try {
    await Aplicacion.create(req.body);
    res.redirect("/aplicaciones");
  } catch (error) {
    res.status(500).json({ message: "Error al crear la aplicación." });
  }
};

// Actualizar una aplicación por su ID
const updateAplicacion = async (req, res) => {
  try {
    Aplicacion.update(req.body, {
      where: { idAplicacion: req.params.id },
    });
    res.json(aplicacionActualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la aplicación." });
  }
};

// Eliminar una aplicación por su ID
const deleteAplicacion = async (req, res) => {
  try {
    await Aplicacion.destroy({
      where: {
        idAplicacion: req.params.id
      }
    });
    res.redirect("/aplicaciones");
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la aplicación." });
  }
};

// Obtener información completa de una aplicación por su ID
const getAplicacionById = async (req, res) => {
  try {
    const aplicacion = await Aplicacion.findByPk(req.params.id);
    const lotes = await LoteInterno.findAll();
    const personas = await Persona.findAll();
    const agentes = await AgenteDeSalud.findAll();
    res.render("aplicacion/editAplicacion", {
      aplicacion: aplicacion,
      lotes: lotes,
      personas: personas,
      agentes: agentes
    })
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener la información de la aplicación." });
  }
};

module.exports = {
  getAllAplicaciones,
  crearAplicacion,
  createAplicacion,
  updateAplicacion,
  deleteAplicacion,
  getAplicacionById,
};
