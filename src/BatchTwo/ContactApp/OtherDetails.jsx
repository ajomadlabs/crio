import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const OtherDetails = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log('Other Details::', contacts);
  return (
    <Box>
      <Typography variant="p" component="p">
        Other Details
      </Typography>
      {contacts.map((contact) => {
        return <p key={contact.email}>{contact.name}</p>;
      })}
    </Box>
  );
};

export default OtherDetails;
