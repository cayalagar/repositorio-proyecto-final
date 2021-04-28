import React from 'react';
import "./Barra.css";

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
                        <input type="text" className="informacion2" name="fechas1" />
                        <input type="text" className="informacion2" name="fechas2" />
                    </div>

                </div>
                <div className="cajita">

                    <label htmlFor="pasajeros">Adultos y niños</label>
                    <input type="text" className="informacion" name="pasajeros" />
                </div>
            </div>
        </div>
    )
}

export default Barra