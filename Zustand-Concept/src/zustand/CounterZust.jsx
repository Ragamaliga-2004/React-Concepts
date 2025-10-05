import { useCounterStore } from "./counterStore";

const CounterZust = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      <h1>COUNT: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default CounterZust;
