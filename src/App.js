import React, { useEffect, useState } from "react";
import "./App.css";
import Bienvenida from "./components/Bienvenida";
import Cards from "./components/Cards";
import Header from "./components/Header";
function App() {
  const [mascotas, misPerritas] = useState([]);
  useEffect(function () {
    return misPerritas([
      {
        tituloTarjeta: "Bombon",
        texto: "soy un chihuahua mutante xd",
        imagen:
          "https://images7.memedroid.com/images/UPLOADED979/5df167851c9b8.jpeg",
      },
      {
        tituloTarjeta: "Domi",
        texto: "Dicen que soy un shnauser corriente Uwu",
        imagen:
          "https://media.istockphoto.com/photos/schnauzer-puppy-running-outside-on-green-grass-field-picture-id846830544?s=612x612",
      },
      {
        tituloTarjeta: "Manchas",
        texto: "soy un chihuahua mutante xd",
        imagen:
          "https://thumbs.dreamstime.com/b/el-perro-blanco-de-la-chihuahua-del-pelo-corto-se-sienta-en-hierba-verde-con-sus-ojos-abre-extensamente-152456251.jpg",
      },
      {
        tituloTarjeta: "Manchas",
        texto: "soy un chihuahua mutante xd",
        imagen:
          "https://thumbs.dreamstime.com/b/el-perro-blanco-de-la-chihuahua-del-pelo-corto-se-sienta-en-hierba-verde-con-sus-ojos-abre-extensamente-152456251.jpg",
      },
      {
        tituloTarjeta: "Manchas",
        texto: "soy un chihuahua mutante xd",
        imagen:
          "https://thumbs.dreamstime.com/b/el-perro-blanco-de-la-chihuahua-del-pelo-corto-se-sienta-en-hierba-verde-con-sus-ojos-abre-extensamente-152456251.jpg",
      },
    ]);
  }, []);
  //al parecer en VS code el .map necesita un return

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-5">
          {mascotas.map((mascota) => {
            return (
              <div className="col .ms-1 mb-4">
                <Cards
                  imagen={mascota.imagen}
                  tituloTarjeta={mascota.tituloTarjeta}
                  texto={mascota.texto}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
