import Head from "next/head";
import { useLazyQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_SUGGESTIONS_BY_PERSONALITY_SCORES } from "@/utils/queries";
import { Results } from "@/components/Results";
import { Loader } from "@/components/Loader";
import { PersonalitySlider } from "@/components/PersonalitySlider";

const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 650px;
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const Headline = styled.h1`
  font-size: 30px;
  margin: 1em 0 0.5em;
`;

const SubHeadline = styled.p`
  font-weight: 100;
  font-size: 20px;
  margin: 0.5em 0;
`;

interface HandleSubmitPayload {
  practical: number;
  caring: number;
  analytical: number;
  driven: number;
  artistic: number;
  organized: number;
}

export default function Home() {
  const [getSugestionsByPersonalityScores, { loading, error, data }] =
    useLazyQuery(GET_SUGGESTIONS_BY_PERSONALITY_SCORES);

  const handleSubmit = (payload: HandleSubmitPayload) => {
    getSugestionsByPersonalityScores({ variables: payload });
  };

  return (
    <>
      <Head>
        <title>Demo Project 2024</title>
        <meta name="description" content="Showcasing Fullstack competenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main>
        <Headline>Upptäck ditt framtida yrke!</Headline>
        <SubHeadline>
          Svara på några frågor om din personlighet så kan vi berätta vilket
          yrke som hade passat dig!
        </SubHeadline>
        {<PersonalitySlider submit={handleSubmit} />}
        {loading && (
          <>
            <p>LADDAR DIN FRAMTID!</p>
            <Loader />
          </>
        )}
        {error && <p>Oj, något gick fel. Vänligen prova igen senare.</p>}
        {data && (
          <Results
            proffessions={data.SuggestionsByPersonalityScores?.proffessions}
          />
        )}
      </Main>
    </>
  );
}
