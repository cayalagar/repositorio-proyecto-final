import React from "react";
import imgM from "../../assets/imagenes/cusco.jpg";
import "./styles_recomendaciones.css";

import { recomendacionesjson } from "../../data/db.json";

export const Recomendaciones = () => {
  return (
    <div className="container-principal">
      <h1>Destinos recomendados por nuestros viajeros</h1>
      <div className="container-subprincipal">
        <div className="container-recomendacion">

          {recomendacionesjson.map((data) => {
            return (
              <div className="container-recomendacion-imagen">
                <img src={data.imagen} alt="imagen" />
                <div className="container-contenido-boton">
                  <div className="container-recomendacion-contenido">
                    <h1 className="ciudad">{data.titulo}</h1>
                    <p className="descripcion">{data.body}</p>
                  </div>
                  <div className="container-recomendacion-boton">
                    <button>Saber más</button>
                  </div>
                </div>
              </div>
            );})}
        </div>
      </div>
      <div className="boton">
        <button>Ver Todos</button>
      </div>
    </div>
  );
};
export default Recomendaciones;
