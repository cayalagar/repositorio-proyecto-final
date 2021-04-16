import React from "react";

import Header from "./componentes/Header/header";
import Login from "./componentes/Login/login";
import Registro from "./componentes/Usuario/Registro";
import Footer from "./componentes/Footer/footer"
import Promociones from "./componentes/Promociones/promociones"

const App = () => {
  return (
    <div>
      <Header />
      <Login />
      <Registro />
      <Promociones/>
      <Footer/>
    </div>
  );
};

export default App;
