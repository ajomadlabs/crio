import React, { useCallback, useState } from 'react';

const ChildComponent = React.memo(({ increment }) => {
  console.log('I am in Child Component');
  return <button onClick={increment}>Increment</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(1);
  // first render if reference = f1
  // second render reference = f2
  // useCallback(()=>{},[])
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={handleIncrement} />
    </div>
  );
};

export default ParentComponent;
