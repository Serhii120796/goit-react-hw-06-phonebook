import { ContactItem } from '../ContactItem/ContactItem';
import {List, ListItem} from './ContactList.styled'

export const ContactList = ({ contactList, deleteContact}) => (
  <List>
    {contactList.map(contact => (
      <ListItem key={contact.id}>
        <ContactItem contactItem={contact} deleteContact={ deleteContact} />
      </ListItem>
    ))}
  </List>
);
