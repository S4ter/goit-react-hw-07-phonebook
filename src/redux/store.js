import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers';
import localStorageMiddleware from './localStorageMiddleware';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  preloadedState: initialState,
  middleware: [localStorageMiddleware],
});
