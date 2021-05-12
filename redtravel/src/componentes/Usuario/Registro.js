import React from "react";
import "./styles_registro.css"

const Registro = () => {
  return (
    <div className="cont-reg-principal">
      <div className="cont-reg-datos">
          <h1>Registro de Usuario</h1>
          <form className="frmRegistro" action="" method="get">
          <div className="cont-reg-datos-per">
              <div className="cont-reg-datos-per1">
                <label name="nombre" className="lbl_reg_usuario"> Nombres: </label>
                <input type="text" className="txt_reg_usuario" placeholder="Nombre" name="nombre"/>
              </div>
              <div className="cont-reg-datos-per1">
                <label name="apellido" className="lbl_reg_usuario"> Apellidos: </label>
                <input type="text" className="txt_reg_usuario" placeholder="Apellidos" name="apellido"/>
              </div>
          </div> 
          <div className="cont-reg-datos-per">
            <div className="cont-reg-datos-per1">
                <label name="dni:" className="lbl_reg_usuario"> DNI: </label>
                <input type="text" className="txt_reg_usuario"  placeholder="DNI" name="dni"/>
            </div>
            <div className="cont-reg-datos-per1">
                <label name="telefono" className="lbl_reg_usuario"> Telefono: </label>
                <input type="text" className="txt_reg_usuario" placeholder="Telefono" name="telefono"/>
            </div>
          </div> 
          <label name="correo" className="lbl_reg_usuario"> Correo: </label>
          <input type="text" className="txt_reg_usuario" placeholder="Correo Electronico" name="correo"/>
          <label name="password" className="lbl_reg_usuario"> Password: </label>
          <input type="text" className="txt_reg_usuario" placeholder="Password" name="password"/>
          <label name="rep_password" className="lbl_reg_usuario"> Repite Password: </label>
          <input type="text" className="txt_reg_usuario" placeholder="Repirta Password" name="rep_password"/> <br/>
          <div className="cont-reg-datos-bot">
              <input type="submit" className="btm_registro" value="Registrarse" /> <br/>
              <input type="reset" className="btm_registro" value="Cancelar" />
              
              <p>¿Ya tiene cunta? </p>
              <a href="/login">Acceder a mi cuenta</a>            
          </div>
          </form>
      </div>
    </div>
  );
};

export default Registro;
