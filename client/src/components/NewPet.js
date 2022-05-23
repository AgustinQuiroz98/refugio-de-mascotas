import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Solicitudcompletada from "./SolicitudCompletada";
import "./styles.css";

const Newpet = () => {
  const [nombre, setNombre] = useState("");
  const [nombreInvalido, setNombreInvalido] = useState(false);

  const [tipo, setTipo] = useState("");
  const [tipoInvalido, setTipoInvalido] = useState(false);

  const [descripcion, setDescripcion] = useState("");
  const [descripcionInvalido, setDescripcionInvalido] = useState(false);

  const [habilidad_1, setHabilidad_1] = useState("");
  const [habilidad_2, setHabilidad_2] = useState("");
  const [habilidad_3, setHabilidad_3] = useState("");
  const [estadoSolicitud, setEstadoSolicitud] = useState(false);

  const validacionNombre = (e) => {
    setNombre(e.target.value);
    if (e.target.value.length < 3) {
      return setNombreInvalido(true);
    } else {
      return setNombreInvalido(false);
    }
  };

  const validacionTipo = (e) => {
    setTipo(e.target.value);
    if (e.target.value.length < 3) {
      return setTipoInvalido(true);
    } else {
      return setTipoInvalido(false);
    }
  };

  const validacionDescripcion = (e) => {
    setDescripcion(e.target.value);
    if (e.target.value.length < 3) {
      return setDescripcionInvalido(true);
    } else {
      return setDescripcionInvalido(false);
    }
  };

  const enviar = (e) => {
    e.preventDefault();
    if (!nombreInvalido && !tipoInvalido && !descripcionInvalido) {
      axios
        .post("http://localhost:8000/api/add", {
          nombre,
          tipo,
          descripcion,
          habilidad_1,
          habilidad_2,
          habilidad_3,
        })
        .then((res) => res.json)
        .catch((err) => console.error(err));

      setEstadoSolicitud(true);
    }
  };

  if (estadoSolicitud) return <Solicitudcompletada />;

  return (
    <>
      <header>
        <h1>Refugio de Mascotas</h1>
        <Link to={"/"}>Regresar al Menu Principal</Link>
      </header>
      <h2>Conoces una Mascota que busque un hogar</h2>
      <form className="formulario" onSubmit={enviar}>
        <label htmlFor="nombre">Nombre de la Mascota:</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={validacionNombre}
        />
        {nombreInvalido && (
          <p style={{ background: "red" }}>
            Nombre invalido, porfavor ingrese uno con 3 caracteres o mas
          </p>
        )}

        <label htmlFor="tipo">Tipo de Mascota:</label>
        <input type="text" name="tipo" value={tipo} onChange={validacionTipo} />
        {tipoInvalido && (
          <p style={{ background: "red" }}>
            Tipo de Mascota invalido, porfavor ingrese uno con 3 caracteres o
            mas
          </p>
        )}

        <label htmlFor="descripcion">Descripcion de la Mascota:</label>
        <input
          type="text"
          name="descripcion"
          value={descripcion}
          onChange={validacionDescripcion}
        />
        {descripcionInvalido && (
          <p style={{ background: "red" }}>
            La Descripcion es invalida, porfavor ingrese una con 3 caracteres o
            mas
          </p>
        )}

        <label>
          <b>Habilidades (opcional): </b>
        </label>

        <label htmlFor="habilidad_1">Habilidad 1 de la Mascota:</label>
        <input
          type="text"
          name="habilidad_1"
          value={habilidad_1}
          onChange={(e) => setHabilidad_1(e.target.value)}
        />

        <label htmlFor="habilidad_2">Habilidad 2 de la Mascota:</label>
        <input
          type="text"
          name="habilidad_2"
          value={habilidad_2}
          onChange={(e) => setHabilidad_2(e.target.value)}
        />

        <label htmlFor="habilidad_3">Habilidad 3 de la Mascota:</label>
        <input
          type="text"
          name="habilidad_3"
          value={habilidad_3}
          onChange={(e) => setHabilidad_3(e.target.value)}
        />

        <button>Enviar Solicitud Mascota</button>
      </form>
    </>
  );
};

export default Newpet;
