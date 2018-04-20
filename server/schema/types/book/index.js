const { GraphQLObjectType,
        GraphQLID,
        GraphQLString
      } = require('graphql');

const AuthorModel = require('../../../mongoose/author');
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      authorId: { type: GraphQLString },
      author: {
        type: require('../author'),
        resolve(parent, args) {
          return AuthorModel.findById(parent.authorId);
        }
      }
  })
});

module.exports = BookType;
