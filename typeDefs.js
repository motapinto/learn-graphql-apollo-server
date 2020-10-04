const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Customer {
    id: ID!
    name: String!
    email: String!
    age: Int!
  }

  type Query {
    customer(id: ID!): Customer
    customers: [Customer]!
  }

  type Mutation {
    addCustomer(name: String!, email: String!, age: String!): Customer!
    editCustomer(
      id: ID!
      name: String!
      email: String!
      age: String!
    ): Customer!
    deleteCustomer(id: ID!): Customer!
  }
`;

module.exports = typeDefs;
