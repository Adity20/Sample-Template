const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');
const User = require('../models/User');

const resolvers = {
  Query: {
    getProducts: async (_, __, { user }) => {
      if (!user) throw new Error('Unauthorized');
      return Product.find();
    },
    getUser: async (_, { id }, { user }) => {
      if (!user) throw new Error('Unauthorized');
      return User.findById(id);
    },
  },
  Mutation: {
    signup: async (_, { name, email, password, role }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword, role });
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error('Invalid credentials');
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
      return { token, user };
    },
    createProduct: async (_, { name, price }, { user }) => {
      if (user.role !== 'admin') throw new Error('Permission denied');
      return Product.create({ name, price, createdBy: user.id });
    },
  },
};

module.exports = resolvers;
