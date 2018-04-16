const { GraphQLObjectType,
        GraphQLID,
        GraphQLString,
        GraphQLInt,
        GraphQLNonNull
      } = require('graphql');

const BookType = require('./index');
const { books , authors } = require('../../../data');
const BookModel = require('../../../mongoose/book');

const addBook = {
  type: BookType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLString }
  },
  resolve(parent, { name, genre, authorId }) {
    const newBook = new BookModel({ name, genre, authorId });
    return newBook.save();
  }
}

module.exports = {
  addBook
}
