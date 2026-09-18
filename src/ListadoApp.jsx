import { useState } from "react";
import AgrgarTarea from "./components/AgrgarTarea";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto ? "✅" : "⛔️"}
    </li>
  );
};

const ListadoApp = () => {
  const addTask = () => {
    setArreglo([...arreglo, { nombre: value, visto: false }]);
  };

  let listadoSecciones = [
    { nombre: "Instalaciones necesarias", visto: true },
    { nombre: "Curso de Vite", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables en JSX", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "UseState", visto: true },
    { nombre: "Redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);

  return (
    <>
      <h2>Listado de temas del curso</h2>
      <AgrgarTarea agregarTarea={setArreglo} />
      <ol>
        {arreglo.map((item) => {
          return (
            <Items key={item.nombre} nombre={item.nombre} visto={item.visto} />
          );
        })}
      </ol>
    </>
  );
};
``;
export default ListadoApp;
