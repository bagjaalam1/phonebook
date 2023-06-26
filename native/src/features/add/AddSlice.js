import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactAPI } from "./AddAPI";

export const addContact = createAsyncThunk(
  "phonebook/addContact",
  addContactAPI
); // asyncThunk ini untuk slice ContactList