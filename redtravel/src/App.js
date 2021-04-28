import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./componentes/Header/header";


import Login from "./componentes/Login/login";
import Registro from "./componentes/Usuario/Registro";

import Body from "./componentes/Body/Body"
import Compra from "./componentes/Compra/Compra";
import Footer from "./componentes/Footer/footer"
import Promociones from "./componentes/Promociones/promociones"
import Recomendaciones from "./componentes/Recomendaciones/recomendaciones"


const App = () => {
  return (
    <div>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Body />
          <Promociones/>
        </Route>
        <Route exact path="/envios">
          <Compra />
        </Route>
        <Route exact path="/alojamiento">
          <Compra />
        </Route>
        <Route exact path="/Recomendadas">
          <Recomendaciones/>
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
};

export default App;
