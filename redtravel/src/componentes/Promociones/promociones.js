import React from "react";
import imgProm1 from "../../assets/imagenes/promociones1.jpg";
import imgProm2 from "../../assets/imagenes/promociones2.jpg";
import "./styles_promociones.css";

const Promo = [
{
    "titulo": "Promocion Generica",
    "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quaerat. Aliquid rem pariatur doloremque cumque ab dolore incidunt labore saepe, nemo omnis voluptatum tempore neque quo veritatis iste numquam delectus.Officiis nihil tenetur magnam aliquam minus quidem, ad assumenda exercitationem sed dolorem deleniti hic nam iusto corporis voluptatibus voluptatem fugiat mollitia rem consequuntur odio nulla in itaque. Sapiente",
    "imagen": imgProm1,
    "id":1
},
{
    "titulo": "Promocion Generica",
    "body": "Promoción es la acción de promocionar una persona, cosa, servicio, etc. Tiene como objetivo promover y divulgar productos, servicios, bienes o ideas, para dar a conocer y persuadir al público de realizar un acto de consumo.",
    "imagen":imgProm2,
    "id":2
},
{
    "titulo": "Promocion Generica",
    "body": "La promoción se hace con el fin de impulsar el producto, sin embargo, dependiendo del tiempo en el que esta se haga el impacto que recibe el consumidor varia, veamos el siguiente escenario: Cuando un producto recién entra en el mercado es necesario recurrir a la publicidad de este, de una manera agradable, haciendo énfasis en las características nuevas y el logotipo de marca, se comienza con la oferta de este",
    "imagen":imgProm1,
    "id":3
}
]

function Promociones({titulo,body,imagen}) {
  
  return (
    <div className="container-promociones-titulo">
      <h1>¡No te lo puedes perder!</h1>


      {
      Promo.map(Promo => (<div className="container-promociones-contenido" key={Promo.id}>
      <div className="container-promocion" >
        <a href="#">
          <img src={Promo.imagen} className="promocion" />
          <h2>{Promo.titulo}</h2>
          <p>
            {Promo.body}
          </p>
        </a>
      </div>
    </div>))
      }



    </div>
  );
};

export default Promociones;
