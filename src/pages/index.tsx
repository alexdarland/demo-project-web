import Head from "next/head";
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import styled from "styled-components";
import { ProgressBar } from "@/components/ProgressBar";
import { Question } from "@/components/Question";
import { questions } from "@/data/questions";
import { GET_SUGGESTIONS } from "@/utils/queries";
import { Results } from "@/components/Results";

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

const ProgressStatus = styled.p`
  font-size: 20px;
  margin: 1em 0;
`;

interface CollectAnswersProps {
  answers: string[];
  addAnswer: Function;
}

const CollectAnswers = ({ answers, addAnswer }: CollectAnswersProps) => {
  return (
    <>
      <ProgressStatus>
        Question {answers.length + 1}/{questions.length}
      </ProgressStatus>
      <ProgressBar length={questions.length} current={answers.length} />
      {answers.length < questions.length && (
        <Question
          text={questions[answers.length].text}
          options={questions[answers.length].options}
          addAnswer={addAnswer}
        />
      )}
    </>
  );
};

export default function Home() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [getSugestions, { loading, error, data }] =
    useLazyQuery(GET_SUGGESTIONS);

  const addAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
  };

  useEffect(() => {
    if (answers.length === questions.length) {
      getSugestions({ variables: { statements: answers.filter(Boolean) } });
    }
  }, [answers]);

  return (
    <>
      <Head>
        <title>Demo Project 2024</title>
        <meta name="description" content="Showcasing Fullstack competenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main>
        <Headline>Discover your future proffession!</Headline>
        <SubHeadline>
          Answer a few of our questions, and we can tell you what type of work
          would suit your personality!
        </SubHeadline>
        {answers.length !== questions.length && (
          <CollectAnswers answers={answers} addAnswer={addAnswer} />
        )}
        {loading && <p>LOADING</p>}
        {error && <p>Oops, something went wrong. Please try again later.</p>}
        {data && <Results proffessions={data.Suggestions?.proffessions} />}
      </Main>
    </>
  );
}
