import http from "http";
import next from "next";
import express from "express";
import cookieParser from "cookie-parser";
import { graphqlHandler } from "./handlers/graphql.mjs";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, quiet: true });
const nextjsHandler = app.getRequestHandler();
const port = process.env.PORT || 8000;

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());
  server.all(["/graphql", "/graphql/*"], graphqlHandler);

  server.all(["/", "/*"], (req, res) => {
    return nextjsHandler(req, res);
  });

  http.createServer(server).listen(port, (err) => {
    if (err) throw err;
    console.info(`> Ready on http://localhost:${port}`);
  });
});
