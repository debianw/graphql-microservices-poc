//
const Ticket = [`
  type Ticket {
    id: Int!
    displayId: String!
    date: String!
    duedate: String!
    user: User!
  }
`];

//
module.exports = Ticket;