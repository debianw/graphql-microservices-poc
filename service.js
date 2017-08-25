//
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Services
const ApiGateway = require('./api-gateway');
const ApiTicket = require('./api-ticket');
const ApiUser = require('./api-user');

app.use('/graph', ApiGateway());
app.use('/ticket', ApiTicket());
app.use('/user', ApiUser());

//
app.listen(port, () => console.log(`Darkpos Core listening on port ${port}`));