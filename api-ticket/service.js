//
const express = require('express');
const db = require('./lib/db');
const routes = require('./lib/routes');
const app = express();
const port = 3002;

//
app.use('/tickets', routes({ db }));

//
app.listen(port, () => console.log(`Service listening on port ${port}`));