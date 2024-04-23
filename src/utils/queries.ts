import { gql } from "@apollo/client";

export const GET_SUGGESTIONS = gql`
  query Suggestions($statements: [String]!) {
    Suggestions(statements: $statements) {
      proffessions
    }
  }
`;
