import React from "react";
import CounterCmponent from "./CounterCmponent";
import FormComponent from "./FormComponent";
import UsersComponent from "./UsersComponent";

const HooksApp = () => {
  return (
    <>
      <h1>Aplicacion de Hooks</h1>
      <hr />
      <CounterCmponent />
      <hr />
      <FormComponent />
      <hr />
      <UsersComponent />
    </>
  );
};

export default HooksApp;
