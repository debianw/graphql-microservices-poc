const express = require('express');
const router = express.Router();

//
module.exports = (options = {}) => {
  const { db } = options;

  //
  router.get('/', (req, res) => {
    console.log(`> requesting all tickets`);
    res.json( db.findAll() );
  });

  //
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(`> requesting ticket ${req.params.id}`);
    
    res.json( db.findById(id) );
  });

  return router;
};