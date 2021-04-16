import React from "react";

import Header from "./componentes/Header/header";
import Login from "./componentes/Login/login";
import Registro from "./componentes/Usuario/Registro";

const App = () => {
  return (
    <div>
      <Header />
      <Login />
      <Registro />
    </div>
  );
};

export default App;
