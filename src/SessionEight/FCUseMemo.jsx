import { useState, useMemo } from 'react';
const expensiveCalculation = (n) => {
  console.log('I am expensive');
  return n;
};

const FCUseMemo = () => {
  const [numberOne, setNumberOne] = useState(1);
  const [numberTwo, setNumberTwo] = useState(1);
  // useMemo(()=>{},[])
  const calculation = useMemo(
    () => expensiveCalculation(numberOne),
    [numberOne]
  );
  return (
    <div>
      <p>Number:{numberOne}</p>
      <p>Number Two: {numberTwo}</p>
      <p>Calculation: {calculation}</p>
      <button onClick={() => setNumberOne(numberOne + 1)}>Update Number</button>
      <button onClick={() => setNumberTwo(numberTwo + 1)}>
        Update Number Two
      </button>
    </div>
  );
};

export default FCUseMemo;
