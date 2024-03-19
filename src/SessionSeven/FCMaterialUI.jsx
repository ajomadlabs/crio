import { Card, CardHeader, CardMedia, Snackbar } from '@mui/material';
import { useState } from 'react';

const FCMaterialUi = () => {
  const [showSnack, setSnack] = useState(false);
  const handleOpenSnack = () => {
    console.log('sNACK oPENM');
    setSnack(true);
  };
  const handleCloseSnack = () => {
    setSnack(false);
  };
  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardHeader title="Hello World, Material UI" />
    //   <CardMedia
    //     component="img"
    //     height="194"
    //     image="https://images.unsplash.com/photo-1708283508253-337621680a84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     alt="Paella dish"
    //   />
    // </Card>
    <>
      <button onClick={handleOpenSnack}>Click Me</button>
      <Snackbar
        open={showSnack}
        onClose={handleCloseSnack}
        message="I love snacks"
        key={'Ajo'}
        autoHideDuration={500}
      />
    </>
  );
};

export default FCMaterialUi;
