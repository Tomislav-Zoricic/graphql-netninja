require('dotenv').config();
const express = require('express');
// one supercharges endpoint to rule them all
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose');

const app = express();

app.use(require('cors')());

mongoose.connect(`mongodb://\
${process.env.DB_USERNAME}\
:${process.env.DB_PASSWORD}\
@${process.env.DB_NAME}`);

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
