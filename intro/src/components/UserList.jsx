import { useFetchData } from "./hooks/useFetchData";

const UserList = ({ endPoint }) => {
  const { data, isLoading } = useFetchData({ endPoint });

  return (
    <>
      <ul>
        {isLoading ? (
          <p>Cargando...</p>
        ) : endPoint === "users" ? (
          data.map((item) => (
            <li key={item.id}>
              <p>Nombre: {item.name}</p>
              <p>Correo: {item.email}</p>
            </li>
          ))
        ) : (
          data.map((item) => (
            <li key={item.id}>
              <p>Comentario: {item.body}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default UserList;
