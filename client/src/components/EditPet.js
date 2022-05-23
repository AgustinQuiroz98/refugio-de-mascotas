import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Solicitudcompletada from "./SolicitudCompletada";
import "./styles.css";

const Editpet = () => {
  const { _id } = useParams();
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

  useEffect(
    () =>
      axios
        .get(`http://localhost:8000/api/traer/${_id}`)
        .then((response) => {
          setNombre(response.data.nombre);
          setTipo(response.data.tipo);
          setDescripcion(response.data.descripcion);
          setHabilidad_1(response.data.habilidad_1);
          setHabilidad_2(response.data.habilidad_2);
          setHabilidad_3(response.data.habilidad_3);
        })
        .catch((err) => console.error(err)),
    [_id]
  );

  const enviar = (e) => {
    e.preventDefault();
    if (!nombreInvalido && !tipoInvalido && !descripcionInvalido) {
      axios
        .put(`http://localhost:8000/api/editar/${_id}`, {
          nombre,
          tipo,
          descripcion,
          habilidad_1,
          habilidad_2,
          habilidad_3,
        })
        .then((res) => console.log(res))
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
      <h2>Editar a {nombre}</h2>
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

        <button>Enviar Nuevos Datos de Mascota</button>
      </form>
    </>
  );
};

export default Editpet;
