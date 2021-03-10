import React from "react";
import "./Cards.css";
const Cards = (props) => {
  const { imagen, tituloTarjeta, texto } = props;
  const acariciarPerro = () => {
    alert("has acariciado a " + tituloTarjeta);
  };
  // recibe propiedades deirecto de app.js
  return (
    <div className="card text-black cardbackground " style={{ width: "18rem" }}>
      <img src={imagen} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{tituloTarjeta}</h5>
        <p class="card-text">{texto}</p>
        <button type="button" onClick={acariciarPerro} class="btn btn-primary">
          Acariciar UwU
        </button>
      </div>
    </div>
  );
};

export default Cards;
