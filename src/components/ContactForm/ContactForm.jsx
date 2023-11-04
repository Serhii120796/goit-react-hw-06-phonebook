import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FormWraper, InputTitle, FieldWraper, StyleField, StyleErrorMessage} from './ContactForm.styled';
import { Button } from '../ContactItem/ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';


const schema = yup.object().shape({
  name: yup.string().min(2).required("Enter a name"),
  number: yup.string().matches(/^\d{9,}$/, 'Enter a phone number with at least 9 digits').required('Enter a phone number'),
});

export const ContactForm = () => {
  
  const contactList = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  
  
  const handleSubmit = (values, { resetForm }) => {
      const checkContact = contactList.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());
      if (checkContact) {
          alert(`${values.name} is already in contacts`);
          return
        }
        dispatch(addContact(values));
        resetForm();
      };
      
      return (
        <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FormWraper>
          <label>
            <InputTitle>Name</InputTitle>
            <FieldWraper>
              <StyleField type="text" name="name" />
              <StyleErrorMessage name="name" component="div" />
            </FieldWraper>
            
          </label>
          <label>
            <InputTitle>Number</InputTitle>
            <FieldWraper>
              <StyleField type="tel" name="number" />
            <StyleErrorMessage name="number" component="div" />
            </FieldWraper>
          </label>
          <Button type="submit">Add contact</Button>
        </FormWraper>
      </Form>
    </Formik>
  );
};
