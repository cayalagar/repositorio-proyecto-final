import React from "react";
import "./info.css"
const Info = () =>{
  return (
    <div className="container-info">
      <div className="container-texto">
        <p>
          Arequipa está regida por sus volcanes. Lo vemos en las paredes de sus
          calles, edificios e iglesias; en la geografía maravillosa que nos
          regala un valle fértil y unos profundos cañones. ¿Te imaginas
          disfrutar de un baño termal mientras observas las montañas verdes
          coronadas por nieves eternas? Arequipa es un lugar para quedarse, por
          su comida única, por su historia, por su majestuosa cordialidad
        </p>
      </div>
      <div className="container-map">
        <img src="https://tecvolucion.com/wp-content/uploads/2017/06/Google-Maps.jpg" alt=""/>
          <h2>Lima - Arequipa</h2>
          <h3>Tiempo: 16h aprox</h3>
          <h3>Distancia: (x)Km aprox</h3>
      </div>
    </div>
  );
}
export default Info;
