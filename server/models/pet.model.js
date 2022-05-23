const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "nombre es obligatorio"],
      minlength: [
        3,
        "el nombre de la mascota debe tener al menos 3 caracteres",
      ],
    },
    tipo: {
      type: String,
      required: [true, "tipo es obligatorio"],
      minlength: [3, "el tipo de la mascota debe tener al menos 3 caracteres"],
    },
    descripcion: {
      type: String,
      required: [true, "descripcion es obligatorio"],
      minlength: [
        3,
        "la descripcion de la mascota debe tener al menos 3 caracteres",
      ],
    },
    habilidad_1: {
      type: String,
    },
    habilidad_2: {
      type: String,
    },
    habilidad_3: {
      type: String,
    },
  },
  { timestamps: true }
);

const PetModel = mongoose.model("pet", PetSchema);

module.exports = PetModel;
