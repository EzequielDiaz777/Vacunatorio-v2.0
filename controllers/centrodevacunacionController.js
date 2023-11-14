const { CentroDeVacunacion } = require("../models/relaciones");

// Obtener todos los centros de vacunación
const getAllCentrosDeVacunacion = async (req, res) => {
  try {
    const centrosDeVacunaciones = await CentroDeVacunacion.findAll();
    res.render("centrodevacunacion/viewCentroDeVacunacion", { centrosDeVacunaciones: centrosDeVacunaciones });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los Centros De Vacunacion." });
  }
};

const crearCentroDeVacunacion = async (req, res) => {
  try {
    res.render("centrodevacunacion/formCentroDeVacunacion");
  } catch (error) {
    res.status(500).json({
      message: "Error al crear un Deposito Provincial.",
    });
  }
}
// Crear un nuevo centro de vacunación
const createCentroDeVacunacion = async (req, res) => {
  try {
    await CentroDeVacunacion.create(req.body);
    res.redirect("/centrosdevacunaciones");
  } catch (error) {
    res.status(500).json({
      message: "Error al crear un Centro De Vacunacion.",
    });
  }
}

const editCentroDeVacunacion = async (req, res) => {
  try {
    const ctroDeVac = await CentroDeVacunacion.findByPk(req.params.id);
    res.render("centrodevacunacion/editCentroDeVacunacion", { ctroDeVac: ctroDeVac });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el Centro De Vacunacion." + error.message,
    });
  }
};

/*

*/

// Actualizar un Depósito Nacional por su ID
const updateCentroDeVacunacion = async (req, res) => {
  try {
    await CentroDeVacunacion.update(
      req.body, {
      where: {
        idCentroDeVacunacion: req.params.id
      },
    }
    );
    res.redirect("/centrosdevacunaciones");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el centro de vacunacion." });
  }
};

// Eliminar un depósito provincial por su ID
const deleteCentroDeVacunacion = async (req, res) => {
  try {
    await CentroDeVacunacion.destroy({
      where: {
        idCentroDeVacunacion: req.params.id
      }
    });
    res.redirect("/centrosdevacunaciones");
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al eliminar el centro de vacunacion."
      });
  }
};

module.exports = {
  getAllCentrosDeVacunacion,
  createCentroDeVacunacion,
  crearCentroDeVacunacion,
  editCentroDeVacunacion,
  updateCentroDeVacunacion,
  deleteCentroDeVacunacion,
};