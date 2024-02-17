import { useEffect, useState } from 'react';
const FCUseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    console.log('Hello, UseEffect');
    setCount(count + 1);
    return () => {
      console.log('Hello, World')
    }
  }, []);
  return <p>Hello, World</p>;
};

export default FCUseEffect;
