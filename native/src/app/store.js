import { configureStore } from "@reduxjs/toolkit";
// import contactReducer from "../features/contactList/ContactListSlice";

export const store = configureStore({
  reducer: {
    phonebook: null
  },
});