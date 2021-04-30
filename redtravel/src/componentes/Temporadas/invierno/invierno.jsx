import React from "react";
import imgM from "../../../assets/temporadas/verano/trujillo.jpg";
import { inviernojson } from "../../../data/db.json";

export const Invierno = () =>{
  return (
    <div className="container-principal">
      <h1>Destinos recomendados por nuestros viajeros</h1>
      <div className="container-subprincipal">
        <div className="container-recomendacion">

          {inviernojson.map((data) => {
            return (
              <div className="container-recomendacion-imagen">
                <img src={imgM} alt="imagen" />
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
    </div>
  );
};
export default Invierno ;
