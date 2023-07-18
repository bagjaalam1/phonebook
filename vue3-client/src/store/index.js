import { createStore } from "vuex";
import { gql } from "@apollo/client/core";
import apolloClient from "../apollo";

const store = createStore({
  state: {
    contacts: [],
    loading: false,
  },
  mutations: {
    setContacts(state, contacts) {
      state.contacts = contacts;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setAddContact(state, contact) {
      state.contacts = [...state.contacts, contact];
    },
    setSearchResult(state, searchResult) {
      console.log(searchResult);
      state.searchResult = searchResult;
    },
  },
  actions: {
    async fetchContacts(context) {
      const GET_CONTACTS = gql`
        query {
          getContacts {
            id
            name
            phone
          }
        }
      `;
      try {
        const { data, loading } = await apolloClient.query({
          query: GET_CONTACTS,
        });
        const contacts = data.getContacts;
        context.commit("setContacts", contacts);
        context.commit("setLoading", loading);
      } catch (e) {
        console.log(e);
      }
    },
    async addContact(context, { name, phone }) {
      const ADD_CONTACT = gql`
        mutation AddContact($input: ContactInput!) {
          addContact(input: $input) {
            id
            name
            phone
          }
        }
      `;
      try {
        const { data } = await apolloClient.mutate({
          mutation: ADD_CONTACT,
          variables: {
            input: {
              name,
              phone,
            },
          },
        });
        const addedContact = data.addContact;
        context.commit("setAddContact", addedContact);
      } catch (e) {
        console.log(e);
      }
    },
    searchContacts(context, { name, phone }) {
      console.log(name, phone);
      console.log(context.state.contacts);
      const searchResult = context.state.contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(name.toLowerCase()) &&
          contact.phone.includes(phone)
        );
      });
      console.log(searchResult);
      context.commit("setSearchResult", searchResult);
    },
  },
  getters: {
    getContacts(state) {
      console.log(state.searchResult);
      return state.searchResult ? state.searchResult : state.contacts;
    },
    getLoading(state) {
      return state.loading;
    },
  },
});

export default store;
