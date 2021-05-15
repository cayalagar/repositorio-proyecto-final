import React from "react";
import imgProm1 from "../../assets/imagenes/promociones1.jpg";
import imgProm2 from "../../assets/imagenes/promociones2.jpg";
import "./styles_promociones.css";

import {promocionesjson} from "../../data/db.json"

export const Promociones = () => {
  
  return (
    <div className="container-promociones-titulo">
      <h1>¡No te lo puedes perder!</h1>
      {promocionesjson.map((data,key) => {
        return(
              <div className="container-promociones-contenido" key={key.id}>
                <div className="container-promocion" >
                  <a href="#">
                    <img src={imgProm1} className="promocion" />
                    <h2>{data.titulo}</h2>
                    <p>{data.body}</p>
                  </a>
                </div>
              </div>
      );})}




    </div>
  );
};

export default Promociones;
