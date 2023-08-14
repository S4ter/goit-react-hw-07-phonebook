import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './PhonebookForm.styles.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    id: nanoid(),
    name: '',
    number: '',
  });

  const handleChangeInput = e => {
    setContact(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact(contact.name, contact.number));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="phonebook_form">
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          onChange={handleChangeInput}
          required
          pattern="^[A-Za-z.'\- ]+$"
          className="form_input"
          placeholder="Name"
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          onChange={handleChangeInput}
          required
          pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
          className="form_input"
          placeholder="Number"
        />
        <button type="submit" className="submit_button">
          Add Contact
        </button>
      </form>
    </div>
  );
};
