import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q1dkd02quc01xkhsd43ozs/master',
  cache: new InMemoryCache()
})