const { GraphQLList, GraphQLString } = require('graphql');
const BookType = require('./index');
const BookModel = require('../../../mongoose/book');

const book = {
  type: BookType,
  args: { name: { type: GraphQLString } },
  resolve(parent, args) {
    return BookModel.findOne({ name: args.name });
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
