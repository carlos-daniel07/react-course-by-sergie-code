import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = (valor = 1) => {
    setCounter(counter + valor);
  };
  const decrement = (valor = 1, negative) => {
    if (negative && counter - valor < 1) {
      setCounter(0);
      return;
    }
    setCounter(counter - valor);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  return { counter, increment, decrement, reset };
};
