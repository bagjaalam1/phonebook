import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addContact } from "../add/AddSlice";

export const fetchContacts = createAsyncThunk(
  "phonebook/fetchContacts",
  async () => {
    const response = await axios.get("http://localhost:3000/api/phonebook");
    console.log(response.data.data);
    return response.data.data;
  }
);

export const updateContact = createAsyncThunk(
  "phonebook/updateContact",
  async ({ id, name, phone }) => {
    console.log(id, name, phone);
    const response = await axios.put(
      `http://localhost:3000/api/phonebook/${id}`,
      { name, phone }
    );
    console.log(response.data);
    return response.data.data;
  }
);

export const phonebookSlice = createSlice({
  name: "phonebook",
  initialState: {
    contacts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          contacts: action.payload
        }
      })
      .addCase(updateContact.fulfilled, (state, action) => {
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
        state.contacts = updatedContacts;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      });
  },
});

export const selectContacts = (state) => state.phonebook.contacts

export default phonebookSlice.reducer;
