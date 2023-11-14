const {
  Aplicacion,
  Persona,
  AgenteDeSalud,
  LoteInterno,
} = require("../models/relaciones");

// Obtener todas las aplicaciones
const getAllAplicaciones = async (req, res) => {
  try {
    const aplicacion = await Aplicacion.findAll();
    res.render("aplicacion/viewAplicacion", {
      aplicacion: aplicacion,
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
    for (agente in agentes) {
      console.log("DNI del agente: " + agente.DNI);
      personas.filter(p => {
        console.log("DNI del paciente: " + p.DNI);
        console.log(p.DNI === agente.DNI);
      })
    }
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
    const nuevaAplicacion = await Aplicacion.create(req.body);
    res.json(nuevaAplicacion);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la aplicación." });
  }
};

// Actualizar una aplicación por su ID
const updateAplicacion = async (req, res) => {
  try {
    const aplicacionActualizada = await Aplicacion.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(aplicacionActualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la aplicación." });
  }
};

// Eliminar una aplicación por su ID
const deleteAplicacion = async (req, res) => {
  try {
    await Aplicacion.destroy({ where: { id: req.params.id } });
    res.json({ message: "Aplicación eliminada correctamente." });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la aplicación." });
  }
};

// Obtener información completa de una aplicación por su ID
const getAplicacionById = async (req, res) => {
  try {
    const aplicacion = await Aplicacion.findByPk(req.params.id, {
      include: [Persona, AgenteDeSalud, LoteInterno],
    });

    if (!aplicacion) {
      return res.status(404).json({ message: "Aplicación no encontrada." });
    }

    res.json(aplicacion);
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
