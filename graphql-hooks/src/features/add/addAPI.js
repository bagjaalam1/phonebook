import { gql } from "apollo-boost";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const addContactAPI = async ({ name, phone }) => {
  console.log("name: ", name);
  console.log("phone: ", phone);
  const mutation = gql`
    mutation AddContact($input: ContactInput!){
      addContact(input: $input) {
        id
        name
        phone
      }
    }
  `;
  const variables = { input: {name, phone} };

  try {
    const response = await client.mutate({ mutation, variables });
    const data = response.data.addContact;
    console.log('data: ', data);
    console.log("woyy");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};