import { nanoid, createSlice} from '@reduxjs/toolkit';

const getInitialsContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: getInitialsContacts(),
  reducers: {
    addContact(state, action) {state.push({ ...action.payload, id: nanoid() })},
    deleteContact(state, action) {return state.filter(contact => action.payload !== contact.id)},
  },
})
  
export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;

