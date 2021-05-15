import React from 'react';
import "./Barra.css";
import Buscar from "./../../Buscar/Buscar"

const Barra = () => {
    return (
        <div>
            <div className="consulta1">
                <form action="/action_viaje"></form>
                <label htmlFor="tipo" id="intro"> Viajes incluye: </label>
                    <div className="opciones">
                        <input type="radio" id="ida" name="viaje" value="solo-ida"/>
                        <label htmlFor="solo-ida">Solo ida</label>
                        </div>
                    <div className="opciones">
                        <input type="radio" id="ida-vuelta" name="viaje" value="ida-vuelta"/>
                        <label htmlFor="solo-ida">Ida y vuelta</label>
                    </div>
            </div>
            <div className="datos">
                <div className="cajita">
                    <label htmlFor="origen">Origen</label>
                    <input type="text" className="informacion" name="origen" />

                </div>
                <div className="cajita">
                    <label htmlFor="destino">Destino</label>
                    <input type="text" className="informacion" name="destino" />

                </div>
                <div className="cajita">
                    <label htmlFor="fechas">Fechas</label>
                    <div className="fechas">
                        <input type="date" className="informacion2" name="fechas1" value="2021-05-15" min="2021-05-15"/>
                        <input type="date" className="informacion2" name="fechas2" min="2021-05-15"/>
                    </div>

                </div>
                <div className="cajita">

                    <label htmlFor="pasajeros">Adultos y niños</label>
                    <input type="text" className="informacion" name="pasajeros" />
                </div>
                <div className="BotonBuscar">

                    <Buscar/>
                </div>
            </div>
        </div>
    )
}

export default Barra
