import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contactList/ContactListSlice";

const store = configureStore({
  reducer: {
    phonebook: contactReducer
  },
});

export default store;