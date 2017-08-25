//
const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const Ticket = require('./ticket');
const User = require('./user');

//
const Query = `
  type Query {
    ${User.queries}
    ${Ticket.queries}
  }
`;

//
const typeDefs = [ Query, ...Ticket.types, ...User.types ];

//
const resolvers = merge(
  Ticket.resolvers,
  User.resolvers
);

//
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});