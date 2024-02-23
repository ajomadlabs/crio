import React, { createContext, useState } from 'react';
import FCChildOne from './FCChildOne';

export const DataContext = createContext(0);
const FCContext = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <DataContext.Provider value={count}>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <FCChildOne />
    </DataContext.Provider>
  );
};

export default FCContext;
