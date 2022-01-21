const { User, Product } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },

    products : async () => {
      return Product.find();
    },

    product : async (parent, { productId }) => {
      return Product.findOne({_id: productId });
    }
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, phoneNumber, address }) => {
      return User.create({ firstName, lastName, email, phoneNumber, address });
    },
   
  },
};

module.exports = resolvers;
