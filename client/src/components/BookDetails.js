import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { bookQueries } from '../queries';

class BookDetails extends Component {
  render() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading Book...</div>);
    }

    return (
      <div>
        <li>Book Name: {data.book.name}</li>
        <li>Book Genre: {data.book.genre}</li>
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

export default graphql(bookQueries.getBookQuery, queryOptions)(BookDetails);
