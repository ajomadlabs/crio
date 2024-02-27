import { useSelector, useDispatch } from 'react-redux';
import { decrementCount, incrementCount } from '../store/action';

const NormalRedux = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <button onClick={() => dispatch(incrementCount())}>+</button>
      <p>Normal Redux {count}</p>
      <button onClick={() => dispatch(decrementCount())}>-</button>
    </>
  );
};

export default NormalRedux;
