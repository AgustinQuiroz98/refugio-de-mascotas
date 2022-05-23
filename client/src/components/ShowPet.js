import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Solicitudcompletada from "./SolicitudCompletada";
import "./styles.css";

const Showpet = () => {
  const [mascota, setMascota] = useState({});
  const [estadoAdopcion, setEstadoAdopcion] = useState(false);
  const { _id } = useParams();

  useEffect(
    () =>
      axios
        .get(`http://localhost:8000/api/traer/${_id}`)
        .then((response) => setMascota(response.data))
        .catch((err) => console.error(err)),
    [_id]
  );

  const adoptar = () => {
    axios
      .delete(`http://localhost:8000/api/adoptar/${_id}`)
      .then((response) => {
        console.log("mascota adoptada");
        setEstadoAdopcion(true);
      })
      .catch((err) => console.error(err));
  };
  if (estadoAdopcion) return <Solicitudcompletada />;
  return (
    <>
      <header>
        <h1>Refugio de Mascotas</h1>
        <Link to={"/"}>Regresar al Menu Principal</Link>
      </header>
      <h2>Detalles acerca de: {mascota.nombre}</h2>
      <section className="detalles">
        <p className="campo campo-1">Tipo de Mascota:</p>
        <p className="dato dato-1"> {mascota.tipo}</p>
        <p className="campo campo-2">Descripcion: </p>
        <p className="dato dato-2">{mascota.descripcion}</p>
        <p className="campo campo-3">Habilidades: </p>
        <p className="dato dato-3">{mascota.habilidad_1}</p>
        <p className="dato dato-3">{mascota.habilidad_2}</p>
        <p className="dato dato-3">{mascota.habilidad_3}</p>
        <button onClick={adoptar}>Adoptar Mascota</button>
      </section>
    </>
  );
};

export default Showpet;
