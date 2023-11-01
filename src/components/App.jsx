import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { Layout } from './Layout';
import { useState, useEffect } from 'react';

const getInitialsContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialsContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact =>
    setContacts([...contacts, { ...newContact, id: nanoid() }]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const findContact = contact => setFilter(contact);

  const deleteContact = id =>
    setContacts(contacts.filter(contact => id !== contact.id));

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} allContacts={contacts} />
      <h2>Contacts</h2>
      <Filter findContact={findContact} />
      <ContactList
        contactList={visibleContacts}
        deleteContact={deleteContact}
      />
    </Layout>
  );
};
