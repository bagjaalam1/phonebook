const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Contact {
    id: ID!
    name: String!
    phone: String!
    createdAt: String!
    updatedAt: String!
  }

  input ContactInput {
    name: String!
    phone: String!
  }

  type Query {
    getContacts: [Contact]
  }

  type Mutation {
    addContact(input: ContactInput): Contact
    updateContact(id: ID!, input: ContactInput): Contact
    deleteContact(id: ID!): Boolean
  }
`);

module.exports = schema;