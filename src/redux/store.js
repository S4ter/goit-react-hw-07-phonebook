import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
});
