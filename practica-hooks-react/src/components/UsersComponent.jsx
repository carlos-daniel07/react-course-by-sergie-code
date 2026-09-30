import { useFetch } from "../hooks/useFetch";

const UsersComponent = () => {
  const { data, isLoading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  return (
    <>
      <h1>Lista de Usuarios</h1>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : errors ? (
        <p>Ha ocurrido un error: {errors} !</p>
      ) : (
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UsersComponent;
