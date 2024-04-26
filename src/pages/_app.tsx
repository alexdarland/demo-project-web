import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../utils/apolloClient";

const GlobalStyles = createGlobalStyle`
    :root {
      --color-primary: #367b92;
      --color-light-grey: #eeeeee;
      --color-mid-grey: #c7c7c7;
      --color-light-blue: #e7f2f7;
    }
/* 
    @font-face {
      font-family: InterVariable;
      font-style: normal;
      font-weight: 100 900;
      font-display: swap;
      src: url("/fonts/Inter/InterVariable.woff2") format("woff2");
    }

    @font-face {
      font-family: InterVariable;
      font-style: italic;
      font-weight: 100 900;
      font-display: swap;
      src: url("/fonts/Inter/InterVariable-Italic.woff2") format("woff2");
    } */

    html,
    body {
      padding: 0;
      margin: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "InterVariable";
    }

    #__next {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  `;

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
