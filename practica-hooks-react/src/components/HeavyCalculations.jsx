import { useMemo } from "react";
import { useState } from "react";

const HeavyCalculations = () => {
  const [show, setShow] = useState(true);
  const [listaNumeros, setListaNumeros] = useState([
    2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2,
  ]);

  const getCalculo = (listaNumeros) =>
    useMemo(() => {
      console.log("Calculando");
      return listaNumeros.reduce((a, b) => a * b);
    }, [listaNumeros]);

  const addNumber = () => {
    setListaNumeros([
      ...listaNumeros,
      listaNumeros[listaNumeros.length - 1] + 1,
    ]);
  };

  return (
    <>
      <h1>Calculos pesados</h1>
      <h2>Calculos: </h2>
      <p>{getCalculo(listaNumeros)}</p>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {show ? "Show" : "Hide"}
      </button>
      <button className="btn btn-info" onClick={() => addNumber()}>
        Agregar numeros
      </button>
    </>
  );
};

export default HeavyCalculations;
