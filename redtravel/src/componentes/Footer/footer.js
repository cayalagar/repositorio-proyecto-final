import React from "react";
import img from "../../assets/imagenes/paypal-icon.svg";
import img1 from "../../assets/imagenes/bcp-logo.svg";
import img2 from "../../assets/imagenes/visa-logo.svg";
import img3 from "../../assets/imagenes/facebook-logo.svg";
import img4 from "../../assets/imagenes/whatsapp-logo.svg";
import img5 from "../../assets/imagenes/yape-logo.png";
import "./styles_footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-redes">
        <h3>Redes Sociales</h3>
        <a href="#">
          <img src={img3} className="imgredes" />
        </a>
        <a href="#">
          <img src={img4} className="imgredes" />
        </a>
        <a href="#">
          <img src={img3} className="imgredes" />
        </a>
        <a href="#">
          <img src={img4} className="imgredes" />
        </a>
        <a href="#">
          <img src={img3} className="imgredes" />
        </a>
        <a href="#">
          <img src={img4} className="imgredes" />
        </a>
      </div>
      <div className="container-nosotros">
        <h3>Nuestra compañia</h3>
        <p>
          RedTravel, en un esfuerzo conjunto por mejorar la calidad del servicio
          y brindar mayores beneficios a todos los usuarios. A través de su
          nueva página web y moderna aplicación móvil, RedTravel
          ofrece pasajes de bus para las rutas más importantes del Perú
        </p>
      </div>
      <div className="container-metodos-de-pago">
        <h3>Metodos de pago</h3>
        <a href="#">
          <img src={img} className="imgredes" />
        </a>
        <a href="#">
          <img src={img1} className="imgredes" />
        </a>
        <a href="#">
          <img src={img2} className="imgredes" />
        </a>
        <a href="#">
          <img src={img5} className="imgredes" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
