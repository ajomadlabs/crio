import { useContext } from 'react';
import { DataContext } from './FCContext';
const FCChildTwo = () => {
  const count = useContext(DataContext);

  return <p>I am just a Child of FCChildOne - {count}</p>;
};

export default FCChildTwo;
