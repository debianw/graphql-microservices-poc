//
const api = require('../api');

//
const resolvers = {
  Query: {
    users: () => api.user.all(),
    user: (_, { id }) => api.user.get(id)
  },

  User: {
    tickets: (user) => user.ticket.map(api.ticket.get)
  },
};

//
module.exports = resolvers;