//
const api = require('../api');

//
const resolvers = {
  Query: {
    tickets: () => api.ticket.all()
  },

  Ticket: {
    user: (ticket) => api.user.get(ticket.userId)
  }
};

//
module.exports = resolvers;