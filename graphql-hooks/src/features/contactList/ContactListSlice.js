import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addContact } from "../add/AddSlice";
import { searchContacts } from "../search/SearchSlice";
import {
  deleteContactAPI,
  fetchContactsAPI,
  updateContactAPI,
} from "./ContactListAPI";

const initialState = {
  contacts: [],
};

export const fetchContacts = createAsyncThunk(
  "phonebook/fetchContacts",
  fetchContactsAPI
);

export const updateContact = createAsyncThunk(
  "phonebook/updateContact",
  updateContactAPI
);

export const deleteContact = createAsyncThunk(
  "phonebook/deleteContact",
  deleteContactAPI
);

export const phonebookSlice = createSlice({
  name: "phonebook",
  initialState,
  reducers: {
    searchContacts,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          contacts: action.payload,
        };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        const contacts = state.contacts;
        if (state.searchKeyword) {
          const updatedSearchResult = contacts.filter(
            (contact) =>
              contact.name
                .toLowerCase()
                .includes(state.searchKeyword.name.toLowerCase()) &&
              contact.phone.includes(state.searchKeyword.phone)
          );
          return {
            ...state,
            searchResult: [...updatedSearchResult, action.payload],
            contacts: [...contacts, action.payload],
          };
        }
        return {
          ...state,
          contacts: [...contacts, action.payload],
        };
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        console.log(action.payload);
        const updatedContacts = state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return {
              ...contact,
              name: action.payload.name,
              phone: action.payload.phone,
            };
          } else {
            return contact;
          }
        });
        if (state.searchKeyword) {
          const updatedSearchResult = updatedContacts.filter(
            (contact) =>
              contact.name
                .toLowerCase()
                .includes(state.searchKeyword.name.toLowerCase()) &&
              contact.phone.includes(state.searchKeyword.phone)
          );
          return {
            ...state,
            searchResult: updatedSearchResult,
            contacts: updatedContacts,
          };
        }
        return {
          ...state,
          contacts: updatedContacts,
        };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log(state.contacts);
        console.log(action.payload);
        const updateDeletedContacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
        console.log(updateDeletedContacts);
        if (state.searchKeyword) {
          const updatedSearchResult = updateDeletedContacts.filter(
            (contact) =>
              contact.name
                .toLowerCase()
                .includes(state.searchKeyword.name.toLowerCase()) &&
              contact.phone.includes(state.searchKeyword.phone)
          );
          return {
            ...state,
            searchResult: updatedSearchResult,
            contacts: updateDeletedContacts,
          };
        }
        return {
          ...state,
          contacts: updateDeletedContacts,
        };
      });
  },
});

export const searchAction = phonebookSlice.actions.searchContacts;

export const selectContacts = (state) =>
  state.phonebook.searchResult
    ? state.phonebook.searchResult
    : state.phonebook.contacts;

export default phonebookSlice.reducer;
