import React from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/imagenes/RedTravel_Original.jpeg"
import ImgUser from "../../assets/imagenes/login_usuario.png"
import "./styles_header.css"

const Header = () => {
  return (
    <div className="contenedor-principal">
        <div className="container-header">
          <div className="container-logo">   
              <img src={Logo} className="imgLogo"/>
          </div>
          <div className="container-text">
              Tu busqueda perfecta para viajar
          </div>
          <div className="container-usuario">
              <img src={ImgUser} className="imgUsuario" />
          </div>
        </div>  
        <div className="Contenedor-navBar">
        <nav>
          <a href="/">Pasajes</a>
          <a href="/envios">Envios</a>
          <a href="/alojamiento">Alojamiento</a>
          <a href="/paquetes">Paquetes</a>
          <a href="/registro">Registrate</a>
        </nav>
    </div>
    </div>

  );
};

export default Header;