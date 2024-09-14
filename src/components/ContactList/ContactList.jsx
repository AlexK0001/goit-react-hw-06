import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import contactsData from '../../contacts.json'

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <Contact 
          key={contact.id} 
          id={contact.id} 
          name={contact.name} 
          phone={contact.phone} 
          {...contactsData}
        />
      ))}
    </ul>
  );
};

export default ContactList;
