import { ContactData, Button } from './ContactItem.styled';

export const ContactItem = ({
  contactItem: { id, name, number },
  deleteContact,
}) => (
  <>
    <ContactData>
      {name}: <span>{number}</span>
    </ContactData>
    <Button type="button" onClick={() => deleteContact(id)}>
      Delete
    </Button>
  </>
);
