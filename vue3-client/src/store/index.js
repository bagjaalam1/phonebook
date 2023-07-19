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
    setAddContact(state, addedContact) {
      state.contacts = [...state.contacts, addedContact];
      state.searchResult = [...state.searchResult, addedContact];
    },
    setSearchResult(state, searchResult) {
      state.searchResult = searchResult;
    },
    setUpdateContact(state, updateData) {
      if (state.searchResult) {
        const updatedContacts = state.searchResult.map((contact) => {
          if (contact.id === updateData.id) {
            return {
              ...contact,
              name: updateData.name,
              phone: updateData.phone,
            };
          } else {
            return contact;
          }
        });
        state.searchResult = updatedContacts;
      } else {
        const updatedContacts = state.contacts.map((contact) => {
          if (contact.id === updateData.id) {
            return {
              ...contact,
              name: updateData.name,
              phone: updateData.phone,
            };
          } else {
            return contact;
          }
        });
        state.contacts = updatedContacts;
      }
    },
    setDeleteContact(state, id) {
      if (state.searchResult) {
        const updateDeletedData = state.searchResult.filter((contact) => {
          return contact.id !== id;
        });
        state.searchResult = updateDeletedData;
      } else {
        const updateDeletedData = state.contacts.filter((contact) => {
          return contact.id !== id;
        });
        state.contacts = updateDeletedData;
      }
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
      const searchResult = context.state.contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(name.toLowerCase()) &&
          contact.phone.includes(phone)
        );
      });
      context.commit("setSearchResult", searchResult);
    },
    async updateContact(context, { id, name, phone }) {
      const mutation = gql`
        mutation UpdateContact($id: ID!, $input: ContactInput!) {
          updateContact(id: $id, input: $input) {
            id
            name
            phone
          }
        }
      `;
      const variables = { id, input: { name, phone } };

      try {
        const response = await apolloClient.mutate({ mutation, variables });
        const data = response.data.updateContact;
        context.commit("setUpdateContact", data);
      } catch (e) {
        console.log(e);
      }
    },
    async deleteContact(context, { id }) {
      const mutation = gql`
        mutation DeleteContact($id: ID!) {
          deleteContact(id: $id)
        }
      `;
      const variables = { id };

      try {
        const response = await apolloClient.mutate({ mutation, variables });
        const data = response.data.deleteContact;
        context.commit("setDeleteContact", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    getContacts(state) {
      return state.searchResult ? state.searchResult : state.contacts;
    },
    getLoading(state) {
      return state.loading;
    },
  },
});

export default store;
