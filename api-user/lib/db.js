//
const users = {
  '1': {
    id: '1',
    firstName: 'Waly',
    lastName: 'ChS',
    username: 'waly',
    email: 'waly@darkpos.com',
    tickets: ['3', '4']
  },

  '2': {
    id: '2',
    firstName: 'Minor',
    lastName: 'Solis',
    username: 'msolis',
    email: 'minor@darkpos.com',
    tickets: ['1', '2']
  }
};

//
const findById = (id) => users[id];
const findAll = () => [ users[1], users[2] ];

//
module.exports = { findById, findAll };