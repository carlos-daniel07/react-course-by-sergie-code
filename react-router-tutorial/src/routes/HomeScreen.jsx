import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <table className="table-dark table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Tecnologìa</th>
              <th scope="col">Correo</th>
              <th scope="col">Redes Sociales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{user.name}</th>
              <td>{user.tech}</td>
              <td>{user.mail}</td>
              <td>{user.media}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeScreen;
