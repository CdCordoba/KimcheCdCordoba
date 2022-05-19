import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-boost";
import Home from "./components/Home/Home";
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);
export default App;
