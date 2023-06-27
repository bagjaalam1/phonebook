const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Phonebook {
    id: ID!
    name: String!
    phone: String!
  }

  type Query {
    phonebook: [Phonebook]
  }

  type Mutation {
    addPhonebook(name: String!, phone: String!): Phonebook
    updatePhonebook(id: ID!, name: String!, phone: String!): Phonebook
    deletePhonebook(id: ID!): Boolean
  }
`);

module.exports = schema;