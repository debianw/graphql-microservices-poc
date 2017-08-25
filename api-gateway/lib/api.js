//
const fetch = require('node-fetch');
const UserApi = `http://localhost:3001`; // User microservice
const TicketApi = `http://localhost:3002`; // Ticket microservice

//
const user = {
  get: (id) => fetch(`${UserApi}/users/${id}`).then(res => res.json()),
  all: () => fetch(`${UserApi}/users`).then(res => res.json()),
};

//
const ticket = {
  get: (id) => fetch(`${TicketApi}/tickets/${id}`).then(res => res.json()),
  all: () => fetch(`${TicketApi}/tickets`).then(res => res.json()),
}

//
module.exports = {
  user,
  ticket
};