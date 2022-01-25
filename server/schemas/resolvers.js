const { User, Product } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

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
    
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      // const correctPw = await User.isCorrectPassword(password);

      // if (!correctPw) {
      //   throw new AuthenticationError('Incorrect password!');
      // }

      const token = signToken(user);
      return { token, user };
    }
  },
};

module.exports = resolvers;
