const { GraphQLList, GraphQLID } = require('graphql');
const BookType = require('./index');
const BookModel = require('../../../mongoose/book');

const book = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  resolve(parent, { id }) {
    return BookModel.findById(id);
  }
}

const books = {
  type: new GraphQLList(BookType),
  resolve(parent, args) {
    return BookModel.find({});
  }
}

module.exports = {
  book,
  books
}
