import React from "react";

import Header from "./componentes/Header/header";
import Login from "./componentes/Login/login";
import Registro from "./componentes/Usuario/Registro";
import Footer from "./componentes/Footer/footer"
import Promociones from "./componentes/Promociones/promociones"
import Recomendaciones from "./componentes/Recomendaciones/recomendaciones"

function App () {

  return (
    <div>
      <Header />
      <Login />
      <Registro />
      <Promociones/>
      <Recomendaciones/>
      <Footer/>
    </div>
  );
};

export default App;
