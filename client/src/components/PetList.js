import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const Petlist = () => {
  const [lista, setLista] = useState([]);

  useEffect(
    () =>
      axios
        .get("http://localhost:8000/api/traer")
        .then((res) => setLista(res.data))
        .catch((err) => console.error(err)),
    []
  );

  return (
    <>
      <header>
        <h1>Refugio de Mascotas</h1>
        <Link to={"/add"}>Donar una Mascota al Refugio</Link>
      </header>
      <h2>Estas mascotas estan buscando un buen y calido hogar</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((mascota, i) => (
            <tr key={i}>
              <td className="name">{mascota.nombre}</td>
              <td className="type">{mascota.tipo}</td>
              <td className="actions">
                <Link to={`/detalles/${mascota._id}`}>Detalles</Link> |{" "}
                <Link to={`/editar/${mascota._id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Petlist;
