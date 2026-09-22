import { useEffect, useState } from "react";

const UserList = ({ endPoint }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endPoint}`,
      );
      const data = await response.json();
      //   console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endPoint]);

  return (
    <>
      <ul>
        {endPoint === "users"
          ? data.map((item) => (
              <li key={item.id}>
                <p>Nombre: {item.name}</p>
                <p>Correo: {item.email}</p>
              </li>
            ))
          : data.map((item) => (
              <li key={item.id}>
                <p>Comentario: {item.body}</p>
              </li>
            ))}
      </ul>
    </>
  );
};

export default UserList;
