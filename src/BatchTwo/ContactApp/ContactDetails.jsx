import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
const ContactDetails = ({ details }) => {
  const { name, username, email, website, phone, id, address, company } =
    details ?? { name, username, email, website, phone, id, address, company };
  return (
    <Box width="80%" sx={{ padding: '20px 30px' }}>
      <center>
        <Avatar
          alt={name}
          sx={{ width: '100px', height: '100px' }}
          src="/static/images/avatar/1.jpg"
        />
      </center>
      <Box marginTop={'100px'} display={'flex'} alignItems={'flex-start'}>
        <Box width={'70%'}>
          <section>
            <Typography variant="h6" component="p">
              Basic Information
            </Typography>
          </section>
          <List>
            <ListItem>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={name} secondary={username} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={phone} />
            </ListItem>
          </List>
          <section>
            <Typography variant="h6" component="p">
              Company Information
            </Typography>
          </section>
          <List>
            <ListItem>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={website} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary={company?.name} />
            </ListItem>
          </List>
        </Box>
        <Box>
          <section>
            <Typography variant="h6" component="p">
              Address Information
            </Typography>
          </section>
          <List>
            <ListItem>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={address?.city} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary={address?.zipcode} />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;
