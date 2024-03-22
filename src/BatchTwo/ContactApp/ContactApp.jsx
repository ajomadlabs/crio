import Header from './Header';
import ContactDetails from './ContactDetails';
import ContactList from './ContactList';
import { HEADER_NAME } from './constants';
import { useEffect, useState, useCallback } from 'react';
import { Box, CircularProgress } from '@mui/material';

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [contactIndex, setContactIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleSelectContact = useCallback((contactIdx) => {
    setContactIndex(contactIdx);
  }, []);
  const handleFetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setContacts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Error::', error);
    }
  };
  useEffect(() => {
    handleFetchContacts();
  }, []);
  return (
    <div>
      <Header name={HEADER_NAME} />
      {loading ? (
        <CircularProgress sx={{ color: '#000000' }} />
      ) : (
        <Box display={'flex'} alignItems={'flex-start'}>
          <ContactList
            contacts={contacts}
            handleSelectContact={handleSelectContact}
            contactIndex={contactIndex}
          />
          <ContactDetails details={contacts?.[contactIndex] ?? {}} />
        </Box>
      )}
    </div>
  );
};

export default ContactApp;
