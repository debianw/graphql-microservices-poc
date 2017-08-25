//
const fetch = require('node-fetch');
const UserApi = `http://localhost:3000/user`; // User microservice
const TicketApi = `http://localhost:3000/ticket`; // Ticket microservice

//
const user = {
  get: (id) => fetch(`${UserApi}/${id}`).then(res => res.json()),
  all: () => fetch(`${UserApi}`).then(res => res.json()),
};

//
const ticket = {
  get: (id) => fetch(`${TicketApi}/${id}`).then(res => res.json()),
  all: () => fetch(`${TicketApi}`).then(res => res.json()),
}

//
module.exports = {
  user,
  ticket
};