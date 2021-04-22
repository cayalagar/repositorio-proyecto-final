import React from "react";
import imgRecomend from "../../assets/imagenes/machupichu.jpg";
import "./styles_recomendaciones.css";

const Recomendaciones = () => {
  return (


    
    <div className="container-principal">
      <h2>Destinos recomendados por nuestros viajeros</h2>
      <div className="container-subprincipal">
        <div className="container-recomendacion">
          <div className="container-recomendacion-imagen">
            <img src={imgRecomend} alt="" />
          </div>

          <div className="container-contenido-boton">
            <div className="container-recomendacion-contenido">
              <h1 className="ciudad">Cusco</h1>
              <p className="descripcion">El Circuito Mágico del Agua </p>
            </div>
            <div className="container-recomendacion-boton">
              <button>Saber mas</button>
            </div>
          </div>
        </div>

        <div className="container-recomendacion">
          <div className="container-recomendacion-imagen">
            <img src={imgRecomend} alt="" />
          </div>

          <div className="container-contenido-boton">
            <div className="container-recomendacion-contenido">
              <h1 className="ciudad">Cusco</h1>
              <p className="descripcion">El Circuito Mágico del Agua </p>
            </div>
            <div className="container-recomendacion-boton">
              <button>Saber mas</button>
            </div>
          </div>
        </div>

        <div className="container-recomendacion">
          <div className="container-recomendacion-imagen">
            <img src={imgRecomend} alt="" />
          </div>

          <div className="container-contenido-boton">
            <div className="container-recomendacion-contenido">
              <h1 className="ciudad">Cusco</h1>
              <p className="descripcion">El Circuito Mágico del Agua </p>
            </div>
            <div className="container-recomendacion-boton">
              <button>Saber mas</button>
            </div>
          </div>
        </div>
      </div>

        
      
    </div>
  );
};
export default Recomendaciones;
