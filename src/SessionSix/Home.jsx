import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Albums from './Albums';
import Photos from './Photos';
const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/photos/:id" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
