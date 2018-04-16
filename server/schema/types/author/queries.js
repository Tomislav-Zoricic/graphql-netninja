const { GraphQLList, GraphQLString } = require('graphql');
const AuthorType = require('./index');
const AuthorModel = require('../../../mongoose/author');

const author = {
  type: AuthorType,
  args: { name: { type: GraphQLString } },
  resolve(parent, args) {
    return AuthorModel.findOne({ name: args.name });
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
