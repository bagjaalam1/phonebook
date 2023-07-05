import { gql } from "apollo-boost";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
  cache: new InMemoryCache(),
});

export const fetchContactsAPI = async () => {
  const query = gql`
    query {
      getContacts {
        id
        name
        phone
      }
    }
  `;
  try {
    const response = await client.query({ query });
    const data = response.data.getContacts;
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const deleteContactAPI = async ({ id }) => {
  const mutation = gql`
    mutation DeleteContact($id: ID!) {
      deleteContact(id: $id)
    }
  `;
  const variables = { id };
  try {
    const response = await client.mutate({ mutation, variables });
    console.log(response);
    const id = response.data.deleteContact;
    return id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateContactAPI = async ({ id, name, phone }) => {
  console.log(id, name, phone)
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
    const response = await client.mutate({ mutation, variables });
    const data = response.data.updateContact;
    console.log(response);
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
