import { gql } from "@apollo/client";

export const GET_SUGGESTIONS_BY_STATEMENTS = gql`
  query GetSuggestionsByStatements($statements: [String]!) {
    SuggestionsByStatements(statements: $statements) {
      proffessions
    }
  }
`;

export const GET_SUGGESTIONS_BY_PERSONALITY_SCORES = gql`
  query GetSuggestionsByPersonalityScores(
    $practical: Int!
    $caring: Int!
    $analytical: Int!
    $driven: Int!
    $artistic: Int!
    $organized: Int!
  ) {
    SuggestionsByPersonalityScores(
      practical: $practical
      caring: $caring
      analytical: $analytical
      driven: $driven
      artistic: $artistic
      organized: $organized
    ) {
      proffessions
    }
  }
`;
