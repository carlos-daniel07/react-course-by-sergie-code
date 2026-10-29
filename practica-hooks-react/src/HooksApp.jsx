import CounterCmponent from "./components/CounterCmponent";
import FormComponent from "./components/FormComponent";
import UsersComponent from "./components/UsersComponent";
import HeavyCalculations from "./components/HeavyCalculations";
import CallBackComponent from "./components/CallBackComponent";
import TaskList from "./components/TaskList";

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
      <hr />
      <CallBackComponent />
      <hr />
      <TaskList />
    </>
  );
};

export default HooksApp;
