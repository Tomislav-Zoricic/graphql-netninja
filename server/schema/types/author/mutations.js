const { GraphQLString,
        GraphQLInt,
      } = require('graphql');

const AuthorType = require('./index');
const AuthorModel = require('../../../mongoose/author');

const addAuthor = {
  type: AuthorType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: GraphQLInt }
  },
  resolve(parent, { name, age }) {
    const newAuthor = new AuthorModel({ name, age });
    return newAuthor.save();
  }
};

module.exports = {
  addAuthor
};
