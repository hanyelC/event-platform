import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4onnk0d0snc01w7hvcifhna/master',
  cache: new InMemoryCache()
})