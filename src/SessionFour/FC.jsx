import { useState } from 'react';
const MyFunctionalComponent = (props, refs) => {
  const [count, updateCount] = useState(0);
  const handleIncrement = () => {
    updateCount(count + 1);
  };
  const handleDecrement = () => {
    updateCount((prevState) => prevState - 1);
  };
  return (
    <div>
      {count > 0 ? <p>Greater than 0 {count}</p> : <p>Lesser than 0 {count}</p>}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default MyFunctionalComponent;
