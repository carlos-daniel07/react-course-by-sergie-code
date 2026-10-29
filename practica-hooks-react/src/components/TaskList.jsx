import { useReducer } from "react";
import { useForm } from "../hooks/useForm";
const initialState = [
  {
    id: 1,
    task: "Explicar Reducers",
    completed: false,
  },
];

// const editTask = {
//   type: "[TAREAS] Editar Tarea",
// };
// const deleteTask = {
//   type: "[TAREAS] Eliminar Tarea",
// };
// const deleteTasks = {
//   type: "[TAREAS] Eliminar Tareas",
// };

const taskReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar Tarea":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    case "[TAREAS] Eliminar Tarea":
      return state.filter((item) => item.id !== action.payload);
    case "[TAREAS] Eliminar Tareas":
      return [];
    default:
      return state;
  }
};

const TaskList = () => {
  const [tasksState, dispatch] = useReducer(taskReducer, initialState);

  const { task, formState, onInputChange } = useForm({ task: "" });

  const addTask = (e) => {
    e.preventDefault();
    if (formState.task == "") return;
    const task = {
      id: new Date().getTime(),
      task: formState.task,
      completed: false,
    };
    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: task,
    };
    dispatch(action);
  };

  const finishTask = ({ id }) => {
    const action = {
      type: "[TAREAS] Finalizar Tarea",
      payload: id,
    };

    dispatch(action);
  };

  const deleteTask = ({ id }) => {
    const action = {
      type: "[TAREAS] Eliminar Tarea",
      payload: id,
    };

    dispatch(action);
  };

  const resetList = () => {
    const action = {
      type: "[TAREAS] Eliminar Tareas",
      payload: "",
    };

    dispatch(action);
  };

  return (
    <>
      <h2>Lista de Tareas</h2>

      <form onSubmit={addTask}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Ingresa nueva tarea
          </label>
          <input
            type="text"
            className="form-control"
            name="task"
            placeholder="Ingrese una tarea"
            onChange={onInputChange}
            value={task}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar Tarea
        </button>
        <button type="button" className="btn btn-danger" onClick={resetList}>
          Resetear
        </button>
      </form>

      <hr />

      <ul className="list-group">
        {tasksState.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item list-group-item-dark d-flex justify-content-between"
            >
              <span>{item.task}</span>
              <div>
                <input
                  type="checkbox"
                  value={item.completed}
                  onChange={() => finishTask(item)}
                />
                {item.completed ? (
                  <span className="badge bg-success ml-2">Finalizada</span>
                ) : (
                  <span className="badge bg-warning ml-2">Pendiente</span>
                )}
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => deleteTask(item)}
                >
                  🗑️
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
