import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Photos = () => {
  const { id } = useParams();
  console.log('Id::', id);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleFetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
      );
      const data = await response.json();
      const finalData = data.filter((photo) => photo.albumId === parseInt(id));
      setPhotos(finalData);
      setIsLoading(false);
    } catch (error) {
      console.log('Error::', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>Loading Photos...</p>
      ) : (
        Array.isArray(photos) &&
        photos.map((photo) => {
          return (
            <img
              key={photo.id}
              src={photo.url}
              alt={photo.title}
              width="100px"
              height="100px"
            />
          );
        })
      )}
    </div>
  );
};

export default Photos;
