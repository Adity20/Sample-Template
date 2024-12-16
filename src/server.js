const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers');
const authMiddleware = require('./utils/auth');
require('dotenv').config();
const { Config } = require('@daytonaio/cli');

const environment = process.env.NODE_ENV || 'development';
const config = Config.load(environment);

const PORT = config.PORT;
const MONGO_URI = config.MONGO_URI;

const startServer = async () => {
  const app = express();

  // Middleware
  app.use(authMiddleware);

  // Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ user: req.user }),
  });

  await server.start();
  server.applyMiddleware({ app });

  // Connect to MongoDB
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Start the server
  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
