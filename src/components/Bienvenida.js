import React from "react";
// cada prop es un objeto de ahi sale el props. nombre
const Bienvenida = (props) => {
  console.log(props);

  //object destructuring para obtener el nombre del objeto props.nombre

  const { nombre } = props;
  return <h2>Bienvenido {nombre} </h2>;
};

export default Bienvenida;
