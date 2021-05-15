import React from "react";
import "./atractivos.css";

function Atractivos() {
  return (
    <div className="container-atractivos">
      <h1>Los atractivos turisticos</h1>
      <div className="container-fondo">
        <div className="tarjetas">
          <h2>Ruta del sillar</h2>
          <img src="https://i.pinimg.com/originals/b0/e0/37/b0e037ec198da9d1433fb3905065d09e.jpg" alt="" />
        </div>
        <div className="tarjetas">
          <h2>Mirador de Yanahuara</h2>
          <img src="https://i.pinimg.com/564x/1d/2f/80/1d2f809cabf61863bf27a1db0678bc03.jpg" alt="" />
        </div>
        <div className="tarjetas">
          <h2>Volcan Misti</h2>
          <img src="https://i.pinimg.com/564x/a4/9b/b3/a49bb3cd0597e441a1a330ec5c959b66.jpg" alt="" />
        </div>
      </div>
      <button>Comprar Boletos</button>
    </div>
  );
}
export default Atractivos;
