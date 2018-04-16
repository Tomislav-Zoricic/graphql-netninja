const { GraphQLObjectType,
        GraphQLID,
        GraphQLString
      } = require('graphql');

const _ = require('lodash');
const { authors: authorsData } = require('../../../data');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      authorId: { type: GraphQLString },
      author: {
        type: require('../author'),
        resolve(parent, args) {
          return _.find(authorsData, { id: parent.authorId });
        }
      }
  })
});

module.exports = BookType;
