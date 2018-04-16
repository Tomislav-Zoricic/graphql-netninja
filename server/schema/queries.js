const { GraphQLObjectType } = require('graphql');
const bookQueries = require('./types/book/queries');
const authorQueries = require('./types/author/queries');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:() => ({
    ...bookQueries,
    ...authorQueries
  })
});

module.exports = RootQuery;
