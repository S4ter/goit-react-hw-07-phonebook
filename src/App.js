import React from 'react';
import { ContactsList } from './components/ContactsList/ContactsList.js';
import { PhonebookForm } from './components/PhonebookForm/PhonebookForm.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/actions.js';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && !error && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <PhonebookForm />
      <ContactsList />
    </div>
  );
};
