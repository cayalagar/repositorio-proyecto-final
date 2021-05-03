import React from "react";
import imgTr from "../../../assets/temporadas/verano/trujillo.jpg";
import imgL from "../../../assets/temporadas/verano/lima.jpg";
import imgT from "../../../assets/temporadas/verano/tumbes.jpg";
import imgA from "../../../assets/temporadas/verano/arequipa.jpg";
import "./verano.css";

export const Verano = () =>{
  return (
    <div class="contenedor">
    <div class="contenedor-cards">            
      <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <a href="">
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
            <a href="">
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
            <a href="">
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
            <a href="">
            <img src="https://images.unsplash.com/photo-1440335680360-79703e7032f9" alt=""/>
            <div class="contenedor-info">
                <div class="info">
                  <h2 class="titulo">Titulo</h2>
                  <p class="categoria">Categoría</p>
                </div>
                <div class="fondo"></div>
            </div></a>
          </div>
      </div>
      <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <a href="">
            <img src="https://images.unsplash.com/photo-1455461491901-a0990c10d84c" alt=""/>
            <div class="contenedor-info">
                <div class="info">
                  <h2 class="titulo">Titulo</h2>
                  <p class="categoria">Categoría</p>
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
export default Verano ;
