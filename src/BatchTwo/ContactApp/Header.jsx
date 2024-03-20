import { AppBar, Toolbar, Typography } from '@mui/material';
const Header = ({ name }) => {
  return (
    <AppBar
      sx={{
        backgroundColor: '#222831',
      }}
      position="static"
    >
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
