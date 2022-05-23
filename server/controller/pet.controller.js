const PetModel = require("../models/pet.model");

const mostrarTodasLasMascotas = async (req, res) => {
  try {
    const getAll = await PetModel.find();
    res.json(getAll);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible traer todas las mascotas " + err.message,
    });
  }
};

const agregarUnaMascota = async (req, res) => {
  try {
    const { nombre, tipo, descripcion, habilidad_1, habilidad_2, habilidad_3 } =
      req.body;
    const newPet = await PetModel.create({
      nombre: nombre,
      tipo: tipo,
      descripcion: descripcion,
      habilidad_1: habilidad_1,
      habilidad_2: habilidad_2,
      habilidad_3: habilidad_3,
    });
    res.json(newPet);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible agregar una nueva mascota " + err.message,
    });
  }
};

const mostrarUnaMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const getOne = await PetModel.findOne({ _id: id });
    res.json(getOne);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible mostrar la mascota " + err.message,
    });
  }
};

const actualizarDatosMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const updatePet = await PetModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(updatePet);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible editar la mascota " + err.message,
    });
  }
};

const borrarDatosMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePet = await PetModel.deleteOne({ _id: id });
    res.json(deletePet);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible borrar los datos de la mascota " + err.message,
    });
  }
};

module.exports = {
  mostrarTodasLasMascotas,
  agregarUnaMascota,
  mostrarUnaMascota,
  actualizarDatosMascota,
  borrarDatosMascota,
};
