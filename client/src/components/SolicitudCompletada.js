import React from "react";
import { Link } from "react-router-dom";

const Solicitudcompletada = () => {
  return (
    <>
      <h1>
        Su solicitud fue Aceptada, Haga click en el link de abajo para volver al
        Menu Principal
      </h1>
      <Link to={"/"}>Regresar al Menu Principal</Link>
    </>
  );
};

export default Solicitudcompletada;
