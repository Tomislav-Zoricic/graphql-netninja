import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { bookQueries } from '../queries';
import './Book.css';

class BookDetails extends Component {
  constructor(props) {
    super();
    this.renderAuthorBooks = this.renderAuthorBooks.bind(this);
  }

  renderAuthorBooks(author) {
    return author.books.map(book => {
        return <li key={book.id}>
          <Link to={`/book/${book.id}`}>{book.name}</Link>
        </li>
    });
  }

  render() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading Book...</div>);
    }

    return (
      <div>
        <p>Book Name: {data.book.name}</p>
        <p>Book Genre: {data.book.genre}</p>
        <p>Author Name: {data.book.author.name}</p>
        <p>Author Age: {data.book.author.age}</p>
        {this.renderAuthorBooks(data.book.author)}
      </div>
    )
  }
}


const queryOptions = {
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
}

export default
 graphql(bookQueries.getBookQuery, queryOptions)(BookDetails);
