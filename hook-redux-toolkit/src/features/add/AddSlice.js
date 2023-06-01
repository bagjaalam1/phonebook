import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactAPI } from "./addAPI";

export const addContact = createAsyncThunk(
  "phonebook/addContact",
  addContactAPI
); // asyncThunk ini untuk slice ContactList
