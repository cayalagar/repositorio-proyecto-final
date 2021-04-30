import React from "react";
import imgM from "../../../assets/temporadas/verano/trujillo.jpg";
import "./verano.css";

export const Verano = () =>{
  return (
    <div className="container-principal">
      <h1>Destinos recomendados por nuestros viajeros</h1>
      <div className="container-subprincipal">
        <div className="container-recomendacion">
              <div className="container-recomendacion-imagen">
                <img src={imgM} alt="imagen" />
                <div className="container-contenido-boton">
                  <div className="container-recomendacion-contenido">
                    <h1 className="ciudad">Departamento</h1>
                    <p className="descripcion">Descripcion</p>
                  </div>
                  <div className="container-recomendacion-boton">
                    <button>Saber más</button>
                  </div>
                </div>
              </div>
        </div>
        <div className="container-recomendacion">
              <div className="container-recomendacion-imagen">
                <img src={imgM} alt="imagen" />
                <div className="container-contenido-boton">
                  <div className="container-recomendacion-contenido">
                    <h1 className="ciudad">Departamento</h1>
                    <p className="descripcion">Descripcion</p>
                  </div>
                  <div className="container-recomendacion-boton">
                    <button>Saber más</button>
                  </div>
                </div>
              </div>
        </div>
        <div className="container-recomendacion">
              <div className="container-recomendacion-imagen">
                <img src={imgM} alt="imagen" />
                <div className="container-contenido-boton">
                  <div className="container-recomendacion-contenido">
                    <h1 className="ciudad">Departamento</h1>
                    <p className="descripcion">Descripcion</p>
                  </div>
                  <div className="container-recomendacion-boton">
                    <button>Saber más</button>
                  </div>
                </div>
              </div>
        </div>
        <div className="container-recomendacion">
              <div className="container-recomendacion-imagen">
                <img src={imgM} alt="imagen" />
                <div className="container-contenido-boton">
                  <div className="container-recomendacion-contenido">
                    <h1 className="ciudad">Departamento</h1>
                    <p className="descripcion">Descripcion</p>
                  </div>
                  <div className="container-recomendacion-boton">
                    <button>Saber más</button>
                  </div>
                </div>
              </div>
        </div>
        <div className="container-recomendacion">
              <div className="container-recomendacion-imagen">
                <img src={imgM} alt="imagen" />
                <div className="container-contenido-boton">
                  <div className="container-recomendacion-contenido">
                    <h1 className="ciudad">Departamento</h1>
                    <p className="descripcion">Descripcion</p>
                  </div>
                  <div className="container-recomendacion-boton">
                    <button>Saber más</button>
                  </div>
                </div>
              </div>
        </div>
        <div className="container-recomendacion">
              <div className="container-recomendacion-imagen">
                <img src={imgM} alt="imagen" />
                <div className="container-contenido-boton">
                  <div className="container-recomendacion-contenido">
                    <h1 className="ciudad">Departamento</h1>
                    <p className="descripcion">Descripcion</p>
                  </div>
                  <div className="container-recomendacion-boton">
                    <button>Saber más</button>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};
export default Verano ;
