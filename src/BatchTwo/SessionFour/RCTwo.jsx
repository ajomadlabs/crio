import { useState } from 'react';
const CounterFunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCountValue) => prevCountValue + 1);
  };
  const handleDecrement = () => {
    setCount((prevCountValue) => prevCountValue - 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <span>{count}</span>
      {count === 0 && <p>Hello Count is 0</p>}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterFunctionalComponent;
