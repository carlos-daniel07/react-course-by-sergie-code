export const ContadorApp = ({ value = "Valor por defecto" }) => {
  const handleClick = () => {
    value += 1;
    console.log(value);
  };

  return (
    <>
      <h1>Contador:</h1>
      <p>{value}</p>
      <button onClick={handleClick}>Soy un boton</button>
    </>
  );
};
