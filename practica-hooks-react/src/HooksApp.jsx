import React from "react";
import CounterCmponent from "./components/CounterCmponent";
import FormComponent from "./components/FormComponent";
import UsersComponent from "./components/UsersComponent";
import HeavyCalculations from "./components/HeavyCalculations";

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
      <hr />
      <HeavyCalculations />
    </>
  );
};

export default HooksApp;
