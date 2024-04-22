import { ProgressBar } from "@/components/ProgressBar";
import { Question } from "@/components/Question";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";

const questions = [
  {
    text: "Which statement fits you?",
    options: [
      { label: "Arrange the invitation lists", value: "" },
      { label: "Design the cards", value: "" },
      { label: "Design the cards", value: "" },
    ],
  },
  {
    text: "Do you want to work by yourself or with others?",
    options: [
      { label: "By myself", value: "likes to work alone" },
      { label: "With others", value: "likes to work with others" },
      {
        label: "Both",
        value: "likes to work both with others and alone",
      },
    ],
  },
  {
    text: "Are you a physically active person?",
    options: [
      {
        label: "I workout regularly",
        value: "likes to be physically active",
      },
      { label: "Sometimes", value: "doesn't mind physical work" },
      {
        label: "I aim to move as little as possible",
        value: "doesn't want a physical job",
      },
    ],
  },
  {
    text: "How important is sallary?",
    options: [
      {
        label: "Very important! I want to buy a house, car and boat!",
        value: "wants a high sallary",
      },
      { label: "It makes life easier", value: "wants a decent salary" },
      {
        label: "Money is not important and is not what makes me happy!",
        value: "wouldn't mind a low income",
      },
    ],
  },
  {
    text: "How do you solve a problem?",
    options: [
      {
        label: "I ask someone I trust for advice!",
        value: "wants input from others when making decitions",
      },
      {
        label: "I search for facts and information online and in books",
        value: "Proactivly seeks out information by themselves",
      },
      {
        label: "I like to figure it our by myself",
        value: "is problem solving orientated",
      },
    ],
  },
  {
    text: "Do you like to take risks?",
    options: [
      {
        label: "I never back down from a challange",
        value: "enjoy taking risks",
      },
      {
        label: "Sometimes you have to take risks to win",
        value: "is willing to take risks",
      },
      {
        label: "I seldomly take unessasary risks.",
        value: "does not like taking risks",
      },
    ],
  },
];

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

  const addAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
  };

  useEffect(() => {
    if (answers.length === questions.length) {
      console.log("submit answers", answers);
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
      </Main>
    </>
  );
}
