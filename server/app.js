const express = require('express');
// one supercharges endpoint to rule them all
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose');

const app = express();

app.use(require('cors')());

mongoose.connect('mongodb://shaun:test1234@ds239309.mlab.com:39309/gql-ninja')
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log('now listening on port 43232000');
});
