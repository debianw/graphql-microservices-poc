//
const express =  require('express');
const graphQLHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./lib/schema');
const app = express();
const port = process.env.PORT || 5000;

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(graphQLHTTP({
  schema,
  graphiql: true
}));

//
app.listen(port, () => console.log(`API Gateway listening on port ${port}`));