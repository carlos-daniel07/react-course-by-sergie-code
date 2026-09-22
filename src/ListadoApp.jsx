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
    { id: 1, nombre: "Instalaciones necesarias", visto: true },
    { id: 2, nombre: "Curso de Vite", visto: true },
    { id: 3, nombre: "Componentes", visto: true },
    { id: 4, nombre: "Variables en JSX", visto: true },
    { id: 5, nombre: "Props", visto: true },
    { id: 6, nombre: "Eventos", visto: true },
    { id: 7, nombre: "UseState", visto: true },
    { id: 8, nombre: "Redux", visto: false },
    { id: 9, nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);

  const onAddTask = (val) => {
    let value = val.trim();
    if (value.length < 1) return;
    const envio = {
      id: arreglo.length + 1,
      nombre: value,
      visto: false,
    };
    setArreglo([...arreglo, envio]);
  };

  return (
    <>
      <h2>Listado de temas del curso</h2>
      <AgrgarTarea agregarTarea={onAddTask} />
      <ol>
        {arreglo.map((item) => {
          return (
            <Items key={item.id} nombre={item.nombre} visto={item.visto} />
          );
        })}
      </ol>
    </>
  );
};
``;
export default ListadoApp;
