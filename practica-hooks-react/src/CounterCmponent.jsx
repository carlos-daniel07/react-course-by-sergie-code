import { useCounter } from "./hooks/useCounter";

const CounterCmponent = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button className="btn btn-primary" onClick={() => increment(5)}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(3, true)}>
        -1
      </button>
    </>
  );
};

export default CounterCmponent;
