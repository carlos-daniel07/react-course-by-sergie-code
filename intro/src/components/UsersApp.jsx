import { useState, useEffect } from "react";
import UserList from "./UserList";

const UsersApp = () => {
  const [endPoint, setEndPoint] = useState("users");

  const handleFetch = () => {
    setEndPoint("comments");
  };

  return (
    <>
      <h1>Lista de usuarios:</h1>
      <UserList endPoint={endPoint} />

      <button onClick={handleFetch}>Actualizar usuarios</button>
    </>
  );
};

export default UsersApp;
