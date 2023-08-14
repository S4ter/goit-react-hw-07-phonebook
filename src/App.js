import React from 'react';
import { ContactsList } from './components/ContactsList/ContactsList.js';
import { PhonebookForm } from './components/PhonebookForm/PhonebookForm.js';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <ContactsList />
    </div>
  );
};
