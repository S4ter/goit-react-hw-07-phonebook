import React, { useState } from 'react';
import './ContactsList.styles.css';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const [searchInputValue, setSearchInputValue] = useState('');
  const handleSearchInput = e => {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchInputValue.toLowerCase())
  );

  return (
    <div className="filter_form">
      <h2 className="filter_title">Contacts:</h2>
      <input
        type="text"
        name="filter"
        placeholder="Search..."
        value={searchInputValue}
        onChange={handleSearchInput}
        className="filter_input"
      />
      <ul>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
