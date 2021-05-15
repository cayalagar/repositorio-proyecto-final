import React from "react";
import "./Referencias.css";

const Referencias = () => {
  return (
    <div className="referencias">
      Los destinos mas buscados!!
      <div className="destinos">
        <a href="#">
          <div className="imagenes" id="cusco">
            Cusco!
          </div>
        </a>
        <a href="#">
          <div className="imagenes" id="arequipa">
            Arequipa!
          </div>
        </a>
        <a href="#">
          <div className="imagenes" id="lima">
            Lima!
          </div>
        </a>
        <a href="#">
          <div className="imagenes" id="puno">
            Puno!
          </div>
        </a>
      </div>
    </div>
  );
};

export default Referencias;
