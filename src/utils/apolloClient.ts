import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  const graphqlUrl =
    typeof window === "undefined" ? `${process.env.GRAPHQL_URL}` : "/graphql";

  return new ApolloClient({
    uri: graphqlUrl,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
