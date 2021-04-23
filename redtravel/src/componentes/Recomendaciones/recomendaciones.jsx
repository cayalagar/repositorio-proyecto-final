import React from "react";
import imgM from "../../assets/imagenes/cusco.jpg";
import "./styles_recomendaciones.css";

import { recomendacionesjson } from "../../data/db.json";

export const Recomendaciones = () => {
  return (
    <div className="container-principal">
      <h2>Destinos recomendados por nuestros viajeros</h2>
      <div className="container-subprincipal">
        <div className="container-recomendacion">

          {recomendacionesjson.map((data) => {
            return (
              <div className="container-recomendacion-imagen">
                <img src={imgM} alt="imagen" />
                <div className="container-contenido-boton">
                  <div className="container-recomendacion-contenido">
                    <h1 className="ciudad">{data.titulo}</h1>
                    <p className="descripcion">{data.body}</p>
                  </div>
                  <div className="container-recomendacion-boton">
                    <button>Saber mas</button>
                  </div>
                </div>
              </div>
            );})}
        </div>
      </div>
    </div>
  );
};
export default Recomendaciones;
