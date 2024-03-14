// App.js

import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './TodoList';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact component={TodoList} />
          {/* Add routes for login, signup, and other pages */}
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
