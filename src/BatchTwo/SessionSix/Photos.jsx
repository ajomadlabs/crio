import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Photos = () => {
  const { photoId } = useParams();
  const [photos, setPhotos] = useState([]);
  const handleFetchPhotos = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
      );
      const data = await response.json();
      const filteredData = data.filter(
        (item) => item.albumId === parseInt(photoId)
      );
      setPhotos(filteredData);
    } catch (error) {
      console.log('Error::', error);
    }
  };
  useEffect(() => {
    handleFetchPhotos();
  }, []);
  return (
    <div>
      <h1>Photos of Album - {photoId}</h1>
      {photos.map((photo) => {
        return (
          <img
            width="100px"
            height="100px"
            key={photo.id}
            src={photo.url}
            alt={photo.title}
          />
        );
      })}
    </div>
  );
};

export default Photos;
