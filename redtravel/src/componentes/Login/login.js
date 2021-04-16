import React from "react";
import ImgUser from "../../assets/imagenes/login_usuario.png"
import "./styles_login.css"


const Login = () => {
  return (
    <div className="container-principal">
      <div className="container-registro">
          <img src={ImgUser} />
          <h1>INICIAR SESION</h1>
          <form action="" method="get">
            <label name="correo"> Correo: </label>
            <input type="text" className="txt_reg_usuario" name="correo"/>
            <label name="password"> Password: </label>
            <input type="text" className="txt_reg_usuario" name="password"/><br/>
            <input type="submit" className="btm_registro" value="ACCEDER" />
          </form>
          <p>¿No tienes cunta? </p>
          <a href="enlacepagina.html">Registrate aqui</a>
      </div>
    </div>
  );
};

export default Login;
