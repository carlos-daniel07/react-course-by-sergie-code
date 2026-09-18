import { useState } from "react";

const AgrgarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    const envio = {
      nombre: inputValue,
      visto: false,
    };
    event.preventDefault();
    agregarTarea((arreglo) => [...arreglo, envio]);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa tarea nueva"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

export default AgrgarTarea;
