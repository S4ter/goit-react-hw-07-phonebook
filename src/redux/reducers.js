import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, loadContacts } from './actions';

const contactsInitial = [];

export const contactsReducer = createReducer(contactsInitial, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [loadContacts]: action => {
    return action.payload;
  },
});
