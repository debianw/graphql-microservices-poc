//
const User = [`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    tickets: [Ticket]
  }
`];

//
module.exports = User;