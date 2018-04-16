const { GraphQLSchema } = require('graphql');
/*
  schema
  - defines types
  - defines relationship of types
  - defining root queries ( initial jump into the graph )
 */

module.exports = new GraphQLSchema({
  query: require('./queries'),
  mutation: require('./mutations')
});
