import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  contacts: [],
};

// action types
const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';

// action creators
const fetchContactsSuccess = (contacts) => {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    payload: contacts,
  };
};

const addContactSuccess = (contact) => {
  return {
    type: ADD_CONTACT_SUCCESS,
    payload: contact,
  };
};

// async action creator
export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/api/phonebook');
      dispatch(fetchContactsSuccess(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addContact = (name, phone) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3000/api/phonebook', {
        name,
        phone,
      });
      dispatch(addContactSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateContact = (id, name, phone) => async (dispatch) => {
  try {
    console.log(id, name, phone)
    const res = await axios.put(`http://localhost:3000/api/phonebook/${id}`, { name, phone });
    dispatch(fetchContacts());
    console.log(res)
  } catch (error) {
    console.log(error);
  }
};

// reducer
const phonebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});

export default store;