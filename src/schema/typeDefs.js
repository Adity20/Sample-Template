const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getProducts: [Product]
    getUser(id: ID!): User
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product
    signup(name: String!, email: String!, password: String!, role: String): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    createdBy: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
  }

  type AuthPayload {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
