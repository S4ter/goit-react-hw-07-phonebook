const localStorageMiddleware = store => next => action => {
  if (action.type === 'contacts/ADD') {
    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const updatedContacts = [...existingContacts, action.payload];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  }

  if (action.type === 'contacts/DELETE') {
    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const updatedContacts = existingContacts.filter(
      contact => contact.id !== action.payload
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  }
  if (action.type === 'contacts/LOAD') {
    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    store.dispatch({ type: 'contacts/LOAD', payload: existingContacts });
  }
  return next(action);
};

export default localStorageMiddleware;
