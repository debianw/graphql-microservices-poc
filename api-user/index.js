//
const express = require('express');
const app = express.Router();
const db = require('./lib/db');

//
module.exports = (options = {}) => {

  //
  app.get('/', (req, res) => {
    console.log(`> requesting all users`);
    res.json( db.findAll() );
  });

  //
  app.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(`> requesting user ${req.params.id}`);
    
    res.json( db.findById(id) );
  });

  return app;
};