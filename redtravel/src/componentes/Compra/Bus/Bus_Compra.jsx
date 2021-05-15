import React from "react";
/*import React, { useState,useEffect } from "react";*/
/*import useFetch from "../../hooks/useFetch/useFetch";*/

import "./styles_Bus_Compra.css";

import BusFrente from "../../../assets/images/bus/bus_toma_aeria_frente.jpg"
import BusAtras from "../../../assets/images/bus/bus_toma_aeria_atras.jpg"

const jsonAsientos = {
    asientos: [
        {
            id: "1",
            columna: "1",
            fila: "1",
            nro_asiento: "01",
            libre: "true",
        },
        {
            id: "2",
            columna: "2",
            fila: "1",
            nro_asiento: "02",
            libre: "true",
        },
        {
            id: "3",
            columna: "3",
            fila: "1",
            nro_asiento: "03",
            libre: "true",
        },
        {
            id: "4",
            columna: "4",
            fila: "1",
            nro_asiento: "04",
            libre: "true",
        },
        {
            id: "5",
            columna: "1",
            fila: "2",
            nro_asiento: "05",
            libre: "false",
        },
        {
            id: "6",
            columna: "2",
            fila: "2",
            nro_asiento: "06",
            libre: "false",
        },
        {
            id: "7",
            columna: "3",
            fila: "2",
            nro_asiento: "07",
            libre: "false",
        },
        {
            id: "8",
            columna: "4",
            fila: "2",
            nro_asiento: "08",
            libre: "true",
        },
        {
            id: "9",
            columna: "1",
            fila: "3",
            nro_asiento: "09",
            libre: "false",
        },
        {
            id: "10",
            columna: "2",
            fila: "3",
            nro_asiento: "10",
            libre: "true",
        },
    ],
};

const BusAsientos = () => {
    return (
        <div className="cont-bus">
            <h2>Selecciona tu asiento's</h2>
            <p>Asientos Ocupados</p>
            <div className="cont-asiento">
                <img src={BusFrente} className="imgBus" />
                <form>
                    <div className="cont-columna">
                        <input type="submit" className="bto_asiento_ocupado" value="01" />
                        <input type="submit" className="bto_asiento" value="05" />
                        <input type="submit" className="bto_asiento" value="09" />
                        <input type="submit" className="bto_asiento_ocupado" value="13" />
                    </div>
                    <div className="cont-columna">
                        <input type="submit" className="bto_asiento_ocupado" value="02" />
                        <input type="submit" className="bto_asiento_ocupado" value="06" />
                        <input type="submit" className="bto_asiento" value="10" />
                        <input type="submit" className="bto_asiento_ocupado" value="14" />
                    </div>

                    <div className="cont-pasaje"></div>

                    <div className="cont-columna">
                        <input type="submit" className="bto_asiento" value="03" />
                        <input type="submit" className="bto_asiento" value="07" />
                        <input type="submit" className="bto_asiento" value="11" />
                        <input type="submit" className="bto_asiento" value="15" />
                    </div>
                    <div className="cont-columna">
                        <input type="submit" className="bto_asiento_ocupado" value="04" />
                        <input type="submit" className="bto_asiento_ocupado" value="08" />
                        <input type="submit" className="bto_asiento" value="12" />
                        <input type="submit" className="bto_asiento" value="16" />
                    </div>
                </form>
                <img src={BusAtras} className="imgBus"/>
            </div>
        </div>
    );
};

export default BusAsientos;
