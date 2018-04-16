const { GraphQLObjectType,
        GraphQLID,
        GraphQLInt,
        GraphQLString,
        GraphQLList
      } = require('graphql');

const { books: data } = require('../../../data');
const BookModel = require('../../../../server/mongoose/book');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(require('../book')),
      resolve(parent, args) {
        return BookModel.find({ authorId: parent.id });
      }
    }
  })
});

module.exports = AuthorType;
