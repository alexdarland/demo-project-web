import styled from "styled-components";
import { questions } from "@/data/questions";
import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";

const ProgressStatus = styled.p`
  font-size: 20px;
  margin: 1em 0;
`;

interface CollectAnswersProps {
  answers: string[];
  addAnswer: Function;
}

export const CollectAnswers = ({ answers, addAnswer }: CollectAnswersProps) => {
  return (
    <>
      <ProgressStatus>
        Fråga {answers.length + 1}/{questions.length}
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
