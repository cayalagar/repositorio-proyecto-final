import React from "react";
import "./styles_registro.css"
const Registro = () => {
  return (
    <div className="container-principal">
      <div className="container-registro">
          <h1>Registro de Usuario</h1>
          <form action="" method="get">
          <label name="nombre"> Nombres: </label>
          <input type="text" className="txt_reg_usuario" name="nombre"/>
          <label name="apellido"> Apellidos: </label>
          <input type="text" className="txt_reg_usuario" name="apellido"/>
          <label name="dni:"> DNI: </label>
          <input type="text" className="txt_reg_usuario" name="dni"/>
          <label name="telefono"> Telefono: </label>
          <input type="text" className="txt_reg_usuario" name="telefono"/>
          <label name="correo"> Correo: </label>
          <input type="text" className="txt_reg_usuario" name="correo"/>
          <label name="password"> Password: </label>
          <input type="text" className="txt_reg_usuario" name="password"/>
          <label name="rep_password"> Repite Password: </label>
          <input type="text" className="txt_reg_usuario" name="rep_password"/> <br/>
          <input type="submit" className="btm_registro" value="Registro" /> <br/>
          <input type="reset" className="btm_registro" value="Cancelar" />
          </form>
          <p>¿Ya tiene cunta? </p>
          <a href="enlacepagina.html">Acceder a mi cuenta</a>
      </div>
    </div>
  );
};

export default Registro;
