import React from "react";
import "./styles_Compra.css";

const Compra = () => {
  return (
    <div className="contenedor-compra">
        <div className="contenedor-mapa">
            <iframe src="https://www.google.com/maps/dir/Plaza+de+Armas+de+Lima,+Cercado+de+Lima/Arequipa,+Per%C3%BA,+310878,+Per%C3%BA+51,+Arequipa/@-14.3337479,-76.5353376,7z/data=!4m14!4m13!1m5!1m1!1s0x9105c8b5d5aa7eb1:0x16061e0b481e22aa!2m2!1d-77.0305458!2d-12.0460038!1m5!1m1!1s0x914249c0f2322f7d:0xbca16941f3445afe!2m2!1d-71.5505316!2d-16.334401!3e0" frameborder="0"></iframe>
        </div>
        <div className="contenedor-destino">
            <div className="contenedor-destino-det">
                <h1 className="contenedor-destino-det-titulo">LIMA - AREQUIPA</h1>
                Destino: 1000km <br />
                Tiempo Estimado: 17h <br />
                Fecha de Salida: 20/04/2021 <br />
                Tipo de Viaje: Solo ida <br />
                N° de Asiento: -- <br />
            </div>
            <div className="contenedor-destino-form">
                <form className="fromCompra">
                    <label>Seleccione tipo de servicio:</label>
                    <input type="radio" name="tipServicio" value="Standar" /> Standar 
                    <input type="radio" name="tipServicio" value="VIP" /> VIP <br></br>
                     <label>Cantidad de asientos:</label> <br />
                    <input type="NUMBER" min="1" max="10" value="1" />
                    <button type="submit" value="Submit">Comprar</button>
                </form>
            </div>            
        </div>
    </div>
  );
};

export default Compra;
