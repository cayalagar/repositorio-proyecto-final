import React from "react";
import imgMapa from "../../../assets/imagenes/arequipa/mapa-de-arequipa.png";
import "./info.css";
const Info = () => {
  return (
    <div className="container-info">
      <div className="container-texto">
        <p>
          Arequipa está regida por sus volcanes. Lo vemos en las paredes de sus
          calles, edificios e iglesias; en la geografía maravillosa que nos
          regala un valle fértil y unos profundos cañones. ¿Te imaginas
          disfrutar de un baño termal mientras observas las montañas verdes
          coronadas por nieves eternas? Arequipa es un lugar para quedarse, por
          su comida única, por su historia, por su majestuosa cordialidad. En su
          centro histórico, se encuentra la Plaza de Armas, una imponente plaza
          principal, y al norte de ella está la Basílica Catedral neoclásica del
          siglo XVII, que alberga un museo donde se exhiben obras de arte y
          objetos religiosos.
        </p>
      </div>
      <div className="container-map">
        <a
          href="https://www.google.com/maps/place/Arequipa/@-16.4108902,-71.5700124,13z/data=!4m5!3m4!1s0x91424a487785b9b3:0xa3c4a612b9942036!8m2!3d-16.4090474!4d-71.537451?hl=es-419"
          target="_blank"
        >
          <img src={imgMapa} alt="" />
          <h2>Ciudad de Arequipa</h2>
          <h3>La rodean 3 volcanes</h3>
          <h3>Cuenta con edificios barrocos construidos de sillar</h3>
        </a>
      </div>
    </div>
  );
};
export default Info;
