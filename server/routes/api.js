const controller = require("../controller/pet.controller");

module.exports = (app) => {
  app.get("/api/traer", controller.mostrarTodasLasMascotas);
  app.post("/api/add", controller.agregarUnaMascota);
  app.get("/api/traer/:id", controller.mostrarUnaMascota);
  app.put("/api/editar/:id", controller.actualizarDatosMascota);
  app.delete("/api/adoptar/:id", controller.borrarDatosMascota);
};
