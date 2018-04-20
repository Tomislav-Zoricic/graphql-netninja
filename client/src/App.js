import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/BookList';
import Book from './components/BookDetails';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div className="main">
            <Route path="/" exact component={BookList} />
            <Route path="/book/:id" component={Book} />
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
