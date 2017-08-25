//
const tickets = {
  '1': {
    id: '1',
    displayId: '123',
    date: new Date(),
    duedate: new Date(),
    userId: '2'
  },

  '2': {
    id: '2',
    displayId: '123',
    date: new Date(),
    duedate: new Date(),
    userId: '2'
  },

  '3': {
    id: '3',
    displayId: '123',
    date: new Date(),
    duedate: new Date(),
    userId: '1'
  },

  '4': {
    id: '4',
    displayId: '123',
    date: new Date(),
    duedate: new Date(),
    userId: '1'
  },
};

//
const findById = (id) => tickets[id];

//
const findAll = () => [tickets['1'], tickets['2'], tickets['3'], tickets['4']];

//
module.exports = { findById, findAll }