//
const express = require('express');
const db = require('./lib/db');
const app = express();
const port = 3001;
const routes = require('./lib/routes');

app.use('/users', routes({ db }));

//
app.listen(port, () => console.log(`Service listening on port ${port}`));