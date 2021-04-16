import React from "react";
import Logo from "../../assets/imagenes/REDTravel.png"
import ImgUser from "../../assets/imagenes/login_usuario.png"
import "./styles_header.css"

const Header = () => {
  return (
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
  );
};

export default Header;