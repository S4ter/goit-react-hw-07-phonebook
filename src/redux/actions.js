import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/ADD', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
export const deleteContact = createAction('contacts/DELETE');
export const loadContacts = createAction('contacts/LOAD');
