import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./componentes/Header/header";
import Login from "./componentes/Login/login";
import Registro from "./componentes/Usuario/Registro";
import Ciudades from "./componentes/Ciudades/ciudades"
import Body from "./componentes/Body/Body"
import Compra from "./componentes/Compra/Compra";
import Footer from "./componentes/Footer/footer"
import Promociones from "./componentes/Promociones/promociones"
import Recomendaciones from "./componentes/Recomendaciones/recomendaciones"
import { Temporada } from "./componentes/Temporadas/temporadas";
import Verano from "./componentes/Temporadas/verano/verano"
import Invierno from "./componentes/Temporadas/invierno/invierno"
import Consejos from "./componentes/Consejos/consejos"
import Primavera from "./componentes/Temporadas/primavera/primavera";
import Otoño from "./componentes/Temporadas/otoño/otoño";
import InfoDepartamento from "./componentes/InfoDepartamento/InfoDepartamento";


const App = () => {
  return (
    <Router>
       <Header />
      <Switch>
        <Route exact path="/">
          <Body />
          <Promociones/>
          <Ciudades/>
        </Route>
        <Route exact path="/envios">
          <Compra />
        </Route>
        <Route exact path="/alojamiento">
          <Compra />
        </Route>
        <Route exact path="/Recomendadas">
          <Recomendaciones/>
          <Temporada/>
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <div className="Temporadas">
            <Route exact path="/verano">
              <Temporada/>
              <Verano/>
              <Consejos/>
            </Route>
            <Route exact path="/primavera">
              <Temporada/>
              <Verano/>
              <Consejos/>
            </Route>
            <Route exact path="/otoño">
              <Temporada/>
              <Verano/>
              <Consejos/>
            </Route>
            <Route exact path="/invierno">
              <Temporada/>
              <Verano/>
              <Consejos/>
            </Route>
            <Route exact path="/departamento">
              <InfoDepartamento/>
            </Route>
        </div>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
