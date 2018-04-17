import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { bookQueries } from '../queries';

class BookList extends Component {
  displayBooks() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading Books...</div>);
    }

    return data.books.map(book => {
      return (
        <li key={book.id}>{book.name}</li>
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

export default graphql(bookQueries.getBooksQuery)(BookList);
