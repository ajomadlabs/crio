import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Albums from './Albums';
import Photos from './Photos';

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/photos/:photoId" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
