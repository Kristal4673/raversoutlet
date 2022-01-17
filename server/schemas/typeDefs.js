const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: Int
    address: String!
  }

  type Product {
    name: String!
    price: Float!
    image: String
    quantity: Int!
    description: String
    category: Category
  }

  type Category {
    name: String!
  }

  type Order {
    productName: String!
    price: Float!
    image: String
    quantity: Int!
    description: String
    shipping: String
    history: String
    category: Category
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
