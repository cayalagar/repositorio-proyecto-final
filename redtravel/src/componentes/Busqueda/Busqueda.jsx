import React from 'react';
//import fondo from "./../../assets/images/catedral.jpg";
import "./Busqueda.css";
import Barra from "./Barra/Barra"

const Busqueda = () => {
    return (
        <div className="bg-image">
            <div  className="saludo">
                <p id="donde">
                    Adonde viajamos?
                </p>
                <Barra/>
            </div>
        </div>
    )
}
//<img src={fondo} alt="fondo-Busqueda" id="fondo-busqueda"/>
export default Busqueda
