import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
const ContactList = React.memo(
  ({ contacts, handleSelectContact, contactIndex }) => {
    return (
      <Box
        width={'20%'}
        sx={{ borderRight: '1px solid rgba(0, 0, 0, 0.12)', height: '100vh' }}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            cursor: 'pointer',
          }}
        >
          {contacts.map((contact, index) => {
            return (
              <React.Fragment key={contact.id}>
                <ListItem
                  alignItems="flex-start"
                  onClick={() => handleSelectContact(index)}
                  sx={{
                    backgroundColor:
                      contactIndex === index ? '#BEBFC5' : 'transparent',
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={contact.name}
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={contact.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {contact.email}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })}
        </List>
      </Box>
    );
  }
);

export default ContactList;
