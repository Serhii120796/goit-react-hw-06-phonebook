import { useDispatch } from 'react-redux';
import { ContactData, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';


export const ContactItem = ({ contactItem: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ContactData>
        {name}: <span>{number}</span>
      </ContactData>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </>
  );
};

// setContacts(contacts.filter(contact => id !== contact.id));
