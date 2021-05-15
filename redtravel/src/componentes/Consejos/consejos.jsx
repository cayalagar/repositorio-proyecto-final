import React from "react";
import imgD from "../../assets/consejos/dinero.jpg";
import imgR from "../../assets/consejos/ropa.jpg";
import imgP from "../../assets/consejos/planificar.jpeg";
import imgDs from "../../assets/consejos/disfrutar.jpg";
import "./consejos.css"

export const Consejos = () => {

    return (

        <div className="container-base">
            <h1>Algunos consejos al viajar por el pais</h1>
            <div className="container-consejos">
                <div className="container-tarjetas">
                    <img src={imgD} alt="" />
                    <h2>Lleva un dinero extra</h2>
                    <p>Al planear un viaje nosotros normalemte llevamos lo justo para no gastar de más, lo que suele pasar es que encontramos algun recuerdo que quisieramos llevarnos a casa y nos disponemos del dinero, por eso te aconsejamos que lleves un poco mas de dinero.</p>
                </div>
                <div className="container-tarjetas">
                    <img src={imgR} alt="" />
                    <h2>Alista la ropa correcta</h2>
                    <p>Cuando viajamos tenemos que tener encuenta en la temporada que nos encontramos,si hace frio o calor, segun eso nos vestimos para no tener una mala experiencia, por eso te recomendamos alistar tu ropa segun la temporada de viaje</p>
                </div>
                <div className="container-tarjetas">
                    <img src={imgP} alt="" />
                    <h2>Planifica tus tiempos</h2>
                    <p>Aveces solemos solicitar un viaje lo mas pronto posible, pero no simepre es buena opcion porque aveces no encontramos el transporte ideal para nosotros, sugerimos tener anticipacion en tus compras de los boletos para evitar malas experiencias en sus compras</p>
                </div>
                <div className="container-tarjetas">
                    <img src={imgDs} alt="" />
                    <h2>Disfruta tu viaje</h2>
                    <p>Cuando ya estas listo para recorrer por todo el peru, no debes preocuparte por otras cosasm si es que cumpliste todo lo que te aconsejamos anteriormente, espero que disfrutes el recorrido.</p>
                </div>
            </div>
        </div>

    )
}

export default Consejos;