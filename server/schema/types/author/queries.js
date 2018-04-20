const { GraphQLList, GraphQLID } = require('graphql');
const AuthorType = require('./index');
const AuthorModel = require('../../../mongoose/author');

const author = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve(parent, { id }) {
    return AuthorModel.findById(id);
  }
}

const authors = {
  type: new GraphQLList(AuthorType),
  resolve(parent, args) {
    return AuthorModel.find({});
  }
}

module.exports = {
  author,
  authors
}
