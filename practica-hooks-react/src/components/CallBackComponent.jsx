import { useState } from "react";
import Increase from "./Increase";
import { useCallback } from "react";

const CallBackComponent = () => {
  const [counter, setCounter] = useState(0);

  const increaseFather = useCallback((val) => {
    setCounter((c) => c + val);
  }, []);

  return (
    <>
      <h1>CallBack Component</h1>
      <h2>Counter: {counter}</h2>
      <Increase increase={increaseFather} />
    </>
  );
};

export default CallBackComponent;
