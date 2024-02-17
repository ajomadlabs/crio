import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
      );
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.log('Error::', error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <ul>
      {Array.isArray(albums) &&
        albums.map((album) => {
          return (
            <li key={album.id}>
              <Link to={`/photos/${album.id}`}>{album.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Albums;
