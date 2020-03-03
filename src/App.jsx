import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import CardsContainer from './components/CardsContainer';

// Create an http link:
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/subscriptions',
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CardsContainer />
    </ApolloProvider>
  );
}

export default App;
