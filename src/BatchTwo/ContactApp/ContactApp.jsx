import Header from './Header';
import ContactDetails from './ContactDetails';
import ContactList from './ContactList';
import { HEADER_NAME } from './constants';
import { useEffect, useState } from 'react';

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const handleFetchContacts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log('Error::', error);
    }
  };
  useEffect(() => {
    handleFetchContacts();
  }, []);
  return (
    <div>
      <Header name={HEADER_NAME} />
      <ContactList contacts={contacts} />
      <ContactDetails />
    </div>
  );
};

export default ContactApp;
