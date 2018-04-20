const { GraphQLObjectType,
        GraphQLID,
        GraphQLString,
        GraphQLInt,
        GraphQLNonNull
      } = require('graphql');

const BookType = require('./index');
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

const updateBook = {
  type: BookType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, { id, name }) {
    // returning null
    return BookModel.update({ _id: id }, { $set: { name }});
  }
}

const deleteBook = {
  type: BookType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, { id }) {
    return BookModel.findByIdAndRemove(id);
  }
}

module.exports = {
  addBook,
  updateBook,
  deleteBook
}
