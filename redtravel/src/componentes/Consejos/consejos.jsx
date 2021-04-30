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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id quos, quaerat sapiente consectetur veniam reiciendis. Distinctio reiciendis quis qui deserunt amet, repellendus velit rerum debitis assumenda reprehenderit sunt architecto!</p>
                </div>
                <div className="container-tarjetas">
                    <img src={imgR} alt="" />
                    <h2>Alista la ropa correcta</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id quos, quaerat sapiente consectetur veniam reiciendis. Distinctio reiciendis quis qui deserunt amet, repellendus velit rerum debitis assumenda reprehenderit sunt architecto!</p>
                </div>
                <div className="container-tarjetas">
                    <img src={imgP} alt="" />
                    <h2>Planifica tus tiempos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id quos, quaerat sapiente consectetur veniam reiciendis. Distinctio reiciendis quis qui deserunt amet, repellendus velit rerum debitis assumenda reprehenderit sunt architecto!</p>
                </div>
                <div className="container-tarjetas">
                    <img src={imgDs} alt="" />
                    <h2>Consejos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id quos, quaerat sapiente consectetur veniam reiciendis. Distinctio reiciendis quis qui deserunt amet, repellendus velit rerum debitis assumenda reprehenderit sunt architecto!</p>
                </div>
            </div>
        </div>

    )
}

export default Consejos;