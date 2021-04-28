import React from "react";
import MapCompra from "../CompraMap/CompraMap.jsx";
import TabsCompra from "./Tabs/Tabs_Compra.jsx";
import BusAsientos from "./Bus/Bus_Compra.jsx";

import logoVisa from "../../assets/imagenes/medios_de_pago/visa.png";
import logoPayPal from "../../assets/imagenes/medios_de_pago/paypal.png";
import logoPagEfe from "../../assets/imagenes/medios_de_pago/pago-efectivo.svg";

import "./styles_Compra.css";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDWrY6R5VcAbKfY6sYRU2WhQuD1wEWq_ZQ`;

const Compra = () => {
  return (
    <div className="contenedor-compra">
      <div className="contenedor-compra-det">
        <MapCompra
          googleMapURL={mapURL}
          containerElement={<div className="contenedor-mapa" />}
          mapElement={<div style={{ height: "100%" }} />}
          loadingElement={<p>Cargando</p>}
        />
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
            <form class="fromCompra">
              <label>Seleccione tipo de servicio:</label>
              <div class="radio">
                <input type="radio" name="tipoBoleto" id="standar" />
                <label for="standar">Standar</label>
                <input type="radio" name="tipoBoleto" id="vip" />
                <label for="vip">VIP</label> <br />
              </div>
              <div class="contenedor-destino-form-div">
                <div class="contenedor-destino-form-div-text">
                  <label name="costoBoleto"> Costo del Boleto: </label>
                  <input type="text" className="txtcompra" name="costoBoleto" />
                </div>
                <div class="contenedor-destino-form-div-text">
                  <label>Cantidad de asientos:</label>
                  <input type="number" className="txtcompra" min="1" max="10" />
                </div>
                <div class="contenedor-destino-form-div-text">
                  <label name="costoTotal"> Costo del Boleto: </label>
                  <input type="text" className="txtcompra" name="costoTotal" />
                </div>
                <div className="contenedor-bottom">
                  <button className="botom-compra" type="submit" value="Submit">
                    Comprar
                  </button>
                </div>
              </div>
            </form>
            <div className="contendor-img-mp">
              <img src={logoPagEfe} className="imgMP" />
              <img src={logoPayPal} className="imgMP" />
              <img src={logoVisa} className="imgMP" />
            </div>
          </div>
        </div>
      </div>
      <div className="Contendor-tab">
        <TabsCompra />
      </div>
      <div className="contenedor_asientos">
        <h2>Selecciona tu asiento's</h2>
        <BusAsientos />
      </div>
    </div>
  );
};

export default Compra;
