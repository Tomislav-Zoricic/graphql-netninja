import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

class BookList extends Component {
  displayBooks() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading Books...</div>);
    }

    return data.books.map(book => {
      return (
        <li>{book.name}</li>
      )
    });
  }
  render() {
    console.log(this.props);
    return (
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
