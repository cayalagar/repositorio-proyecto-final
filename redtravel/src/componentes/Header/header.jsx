import React from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/images/RedTravel_Original.jpeg"
import ImgUser from "../../assets/images/login_usuario.png"
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
              <a href="/login">
                  <img src={ImgUser} className="imgUsuario" />
              </a>
          </div>
        </div>  
        <div className="Contenedor-navBar">
          <nav>
            <a className="itemMenu" href="/">Pasajes</a>
            <a className="itemMenu" href="/alojamiento">Compra</a>
            <a className="itemMenu" href="/Recomendadas">Recomendadas</a>
            <a className="itemMenu" href="/registro">Registrate</a>
          </nav>
        </div>
    </div>
  );
};

export default Header;