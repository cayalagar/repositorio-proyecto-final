import React from "react";
import imgTr from "../../../assets/temporadas/verano/trujillo.jpg";
import imgL from "../../../assets/temporadas/verano/lima.jpg";
import imgT from "../../../assets/temporadas/verano/tumbes.jpg";
import imgA from "../../../assets/temporadas/verano/arequipa.jpg";
import imgC from "../../../assets/temporadas/verano/Camana.jpg"
import imgM from "../../../assets/temporadas/verano/mancora.png"
import "./primavera.css";

export const Primavera = () =>{
  return (
    <div class="contenedor">
    <div class="contenedor-cards">            
      <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <a href="/departamento">
            <img src={imgTr} alt=""/>
            <div class="contenedor-info">
                <div class="info">
                  <h2 class="titulo">Trujillo</h2>
                  <p class="categoria">Playas</p>
                </div>
                <div class="fondo"></div>
            </div></a>
          </div>
      </div>
      <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <a href="/departamento">
            <img src={imgL} alt=""/>
            <div class="contenedor-info">
                <div class="info">
                  <h2 class="titulo">Lima</h2>
                  <p class="categoria">Chorrillos</p>
                </div>
                <div class="fondo"></div>
            </div></a>
          </div>
      </div>
      <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <a href="/departamento">
            <img src={imgT} alt=""/>
            <div class="contenedor-info">
                <div class="info">
                  <h2 class="titulo">Tumbes</h2>
                  <p class="categoria">Costas</p>
                </div>
                <div class="fondo"></div>
            </div></a>
          </div>
      </div>
      <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <a href="/departamento">
            <img src={imgC} alt=""/>
            <div class="contenedor-info">
                <div class="info">
                  <h2 class="titulo">Arequipa</h2>
                  <p class="categoria">Camaná</p>
                </div>
                <div class="fondo"></div>
            </div></a>
          </div>
      </div>
      <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <a href="/departamento">
            <img src={imgM} alt=""/>
            <div class="contenedor-info">
                <div class="info">
                  <h2 class="titulo">Piura</h2>
                  <p class="categoria">Máncora</p>
                </div>
                <div class="fondo"></div>
            </div></a>
          </div>
      </div>
      <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <a href="/departamento">
            <img src={imgA} alt="Arequipa"/>
            <div class="contenedor-info">
                <div class="info">
                  <h2 class="titulo">Arequipa</h2>
                  <p class="categoria">Playa De Mollendo</p>
                </div>
                <div class="fondo"></div>
            </div></a>
          </div>
      </div>
     </div>
</div>
  );
};
export default Primavera ;
