//
const express =  require('express');
const app = express.Router();
const graphQLHTTP = require('express-graphql');
const schema = require('./lib/schema');

//
module.exports = (options = {}) => {

  app.use(graphQLHTTP({
    schema,
    graphiql: true
  }));

  return app;
};