import React from "react";
import imgV from "../../assets/temporadas/verano.svg"
import imgO from "../../assets/temporadas/otoño.svg"
import imgI from "../../assets/temporadas/invierno.svg"
import imgP from "../../assets/temporadas/primavera.svg"
import "./temporada.css";


export const Temporada = () => {

    return(
<div className="container-temporada">
        <h1>Recomendaciones según las temporadas</h1>
        <div className="container-temporada-card">
        <div className="container-cards">
            <a href="/verano">
            <h1>VERANO</h1>
            <img src={imgV} alt=""/>
            <p>Un clima caluroso, el tiempo perfecto para ir a veranear por las regiones de la costa</p>
            <h4>Comienza: el 22 de diciembre</h4>
            <h4>Termina: el 21 de marzo</h4>
            </a>
        </div>
        <div className="container-cards">
            <a href="/otoño">
            <h1>OTOÑO</h1>
            <img src={imgO} alt=""/>
            <p>Es una temporada de transicion de verano a invierno, bajan las temperaturas</p>
            <h4>Comienza: al 22 de marzo</h4>
            <h4>Termina: al 21 de junio</h4>
            </a>
        </div>
        <div className="container-cards">
            <a href="/invierno">
            <h1>INVIERNO</h1>
            <img src={imgI} alt=""/>
            <p>Es la temporada mas fria del año, recuerda abrigarte para evitar resfrios</p>
            <h4>Comienza: el 22 de junio</h4>
            <h4>Termina: el 22 de setiembre</h4>
            </a>
        </div>
        <div className="container-cards">
            <a href="/primavera">
            <h1>PRIMAVERA</h1>
            <img src={imgP} alt=""/>
            <p>Es una temporada de transicion de verano a invierno, bajan las temperaturas</p>
            <h4>Comienza: al 23 de setiembre</h4>
            <h4>Termina: al 21 de diciembre</h4>
            </a>
        </div>
    </div>
</div>
    );

}