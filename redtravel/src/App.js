import React from "react";

import Header from "./componentes/Header/header";
import Login from "./componentes/Login/login";
import Registro from "./componentes/Usuario/Registro";
import Body from "./componentes/Body/Body"

const App = () => {
  return (
    <div>
      <Header />
      <Login />
      <Body/>
      <Registro />
    </div>
  );
};

export default App;
