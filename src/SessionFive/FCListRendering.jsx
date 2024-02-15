import { useState } from 'react';

const FCRendering = () => {
  const [myList, setMyList] = useState([
    {
      id: 1,
      name: 'Ajo',
      org: 'LT',
    },
    {
      name: 'Jatin',
      org: 'Leap Finance',
    },
  ]);
  const handleUpdateList = (item = {}) => {
    setMyList((prevState) => {
      return [...prevState, item];
    });
  };
  return (
    <div>
      {myList.map((item, ind) => {
        return (
          <div id="" key={`${item}_${Math.random()}`}>
            <p>{item.name}</p>
            <p>{item.org}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FCRendering;
