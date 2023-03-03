import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  contacts: [],
};

// action types
const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
const EDIT_CONTACT_SUCCESS = "EDIT_CONTACT_SUCCESS";
const DELETE_CONTACT_SUCCESS = "DELETE_CONTACT_SUCCESS";
const SEARCH_CONTACTS = "SEARCH_CONTACTS";

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

const editContactSuccess = (contact) => {
  return {
    type: EDIT_CONTACT_SUCCESS,
    payload: contact,
  };
};

const deleteContactSuccess = (id) => {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload: id,
  };
};

export const searchContacts = (name, phone) => {
  return {
    type: SEARCH_CONTACTS,
    payload: {
      name,
      phone,
    },
  };
};

// async action creator
export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/api/phonebook");
      dispatch(fetchContactsSuccess(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addContact = (name, phone) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/api/phonebook", {
        name,
        phone,
      });
      dispatch(addContactSuccess(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateContact = (id, name, phone) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/phonebook/${id}`,
      { name, phone }
    );
    dispatch(editContactSuccess(response.data.data));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  console.log("id: " + id);
  const response = await axios.delete(
    `http://localhost:3000/api/phonebook/${id}`
  );
  dispatch(deleteContactSuccess(id));
  console.log(response);
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
    case EDIT_CONTACT_SUCCESS:
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

    case DELETE_CONTACT_SUCCESS:
      const updateDeletedContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );

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

    case SEARCH_CONTACTS:
      const { name, phone } = action.payload;

      const searchResult = state.contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(name.toLowerCase()) &&
          contact.phone.includes(phone)
      );

      return {
        ...state,
        searchKeyword: action.payload,
        searchResult,
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
