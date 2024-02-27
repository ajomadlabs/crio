import { useSelector } from 'react-redux';
const AsyncRedux = () => {
  const count = useSelector((state) => state.counter.count);
  return <p>Async Redux {count}</p>;
};

export default AsyncRedux;
