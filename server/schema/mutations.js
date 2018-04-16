const { GraphQLObjectType } = require('graphql');

const bookMutations = require('./types/book/mutations');
const authorMutations = require('./types/author/mutations');

const Mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    ...bookMutations,
    ...authorMutations
  }
});

module.exports = Mutation;
