import { useState, useEffect } from 'react';
const CounterFunctionalComponent = () => {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const handleIncrement = () => {
  //   setCount((prevCountValue) => prevCountValue + 1);
  // };
  // const handleDecrement = () => {
  //   setCount((prevCountValue) => prevCountValue - 1);
  // };
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const loading = false
  // const setLoading = (value) => { loading = value}
  const handleFetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    setPhotos(data);
    setLoading(false);
  };
  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <div>
      {/* <button onClick={handleIncrement}>Increment</button>
      <span>{count}</span>
      {count === 0 && <p>Hello Count is 0</p>}
      <button onClick={handleDecrement}>Decrement</button> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        photos.map((photo) => {
          return (
            <div key={`${Math.random()}`}>
              <p>{photo.title}</p>
              <img
                alt={photo.title}
                width="100px"
                height="100px"
                src={photo.url}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default CounterFunctionalComponent;
