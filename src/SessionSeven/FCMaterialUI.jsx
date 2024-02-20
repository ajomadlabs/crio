import { Card, CardHeader, CardMedia } from '@mui/material';

const FCMaterialUi = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Hello World, Material UI" />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1708283508253-337621680a84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Paella dish"
      />
    </Card>
  );
};

export default FCMaterialUi;
