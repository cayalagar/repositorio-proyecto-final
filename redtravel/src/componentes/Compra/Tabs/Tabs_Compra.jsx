import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../Tabs/Styles_Tabs_Compra.css"

import Imagen1 from "../../../assets/imagenes/arequipa/arequipa1.jpg"
import Imagen2 from "../../../assets/imagenes/arequipa/arequipa2.jpg"
import Imagen3 from "../../../assets/imagenes/arequipa/arequipa3.jfif"
import Imagen4 from "../../../assets/imagenes/arequipa/arequipa4.jfif"

const TabsCompra=() => (
  <Tabs>
    <TabList>
      <Tab>Descripción</Tab>
      <Tab>Opciones</Tab>
      <Tab>Galeria</Tab>
    </TabList>

    <TabPanel>
      Arequipa es la capital de la época colonial de la región de Arequipa en Perú. 
      La rodean 3 volcanes y cuenta con edificios barrocos construidos de sillar, 
      una piedra volcánica blanca. En su centro histórico, se encuentra la Plaza de Armas, 
      una imponente plaza principal, y al norte de ella está la Basílica Catedral neoclásica del siglo XVII, 
      que alberga un museo donde se exhiben obras de arte y objetos religiosos.
    </TabPanel>
    <TabPanel>
      <h2>Aqui las opciones</h2>
    </TabPanel>
    <TabPanel>
      <div className="cont-tab-gal">
        <div className="cont-tab-gal">
            <h2>Arequipa</h2>
        </div>
        <div className="cont-tab-gal-img">
            <img className="cont-tab-gal-img-img" src={Imagen1}></img>
            <img className="cont-tab-gal-img-img" src={Imagen2}></img>
            <img className="cont-tab-gal-img-img" src={Imagen3}></img>
            <img className="cont-tab-gal-img-img" src={Imagen4}></img> 
        </div>        
      </div>
    </TabPanel>
  </Tabs>
);

export default TabsCompra;