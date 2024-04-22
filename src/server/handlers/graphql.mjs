import httpProxy from "http-proxy";

const graphqlProxy = httpProxy.createProxyServer({
  target: process.env.GRAPHQL_URL,
  prependPath: false,
});

export const graphqlHandler = async (req, res) => {
  graphqlProxy.web(
    req,
    res,
    {
      headers: {
        ...(process.env.GRAPHQL_REQUEST_HOST && {
          host: process.env.GRAPHQL_REQUEST_HOST,
        }),
      },
    },
    (error) => {
      res.status(500);
      res.send(error.toString());
    }
  );
};
