import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const addContact = createAsyncThunk(
  "phonebook/addContact",
  async ({ name, phone }) => {
    const { data } = await axios.post("http://localhost:3000/api/phonebook", {
      name,
      phone,
    });
    console.log(data);
    return data.data;
  }
);

export const phonebookSlice = createSlice({
  name: "phonebook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { setContact } = phonebookSlice.actions;

export default phonebookSlice.reducer;
