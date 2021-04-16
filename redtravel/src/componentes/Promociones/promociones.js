import React from "react";
import imgProm from "../../assets/imagenes/promociones.jpg";
import "./styles_promociones.css";

const Promociones = () => {
  return (
    <div className="container-promociones-titulo">
      <h1>¡No te lo puedes perder!</h1>
      <div className="container-promociones-contenido">
        <div className="container-promocion1">
          <a href="#">
            <img src={imgProm} className="promocion1" />
            <h2>Promocion Generica</h2>
            <p>
              En la fase de lanzamiento nos ayuda a comunicar y dar a conocer
              aquello que queremos vender y nos permite hacer hincapié en la
              novedad, la diferencia o un precio especial de lanzamiento. En la
              fase de lanzamiento nos ayuda a comunicar y dar a conocer aquello
              que queremos vender y nos permite hacer hincapié en la novedad, la
              diferencia o un precio especial de lanzamiento. En la fase de
              lanzamiento nos ayuda a comunicar y dar a conocer aquello que
              queremos vender y nos permite hacer hincapié en la novedad, la
              diferencia o un precio especial de lanzamiento.
            </p>
          </a>
        </div>
        <div className="container-promocion2">
          <a href="#">
            <img src={imgProm} className="promocion2" />
            <h2>Promocion Generica</h2>
            <p>
              En la fase de lanzamiento nos ayuda a comunicar y dar a conocer
              aquello que queremos vender y nos permite hacer hincapié en la
              novedad, la diferencia o un precio especial de lanzamiento. En la
              fase de lanzamiento nos ayuda a comunicar y dar a conocer aquello
              que queremos vender y nos permite hacer hincapié en la novedad, la
              diferencia o un precio especial de lanzamiento. En la fase de
              lanzamiento nos ayuda a comunicar y dar a conocer aquello que
              queremos vender y nos permite hacer hincapié en la novedad, la
              diferencia o un precio especial de lanzamiento.
            </p>
          </a>
        </div>
        <div className="container-promocion3">
          <a href="#">
            <img src={imgProm} className="promocion3" />
            <h2>Promocion Generica</h2>
            <p>
              En la fase de lanzamiento nos ayuda a comunicar y dar a conocer
              aquello que queremos vender y nos permite hacer hincapié en la
              novedad, la diferencia o un precio especial de lanzamiento. En la
              fase de lanzamiento nos ayuda a comunicar y dar a conocer aquello
              que queremos vender y nos permite hacer hincapié en la novedad, la
              diferencia o un precio especial de lanzamiento. En la fase de
              lanzamiento nos ayuda a comunicar y dar a conocer aquello que
              queremos vender y nos permite hacer hincapié en la novedad, la
              diferencia o un precio especial de lanzamiento.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
