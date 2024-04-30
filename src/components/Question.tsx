import styled from "styled-components";
import { PrimaryButton } from "./Button";

const Wrapper = styled.div``;

const QuestionText = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Option {
  label: string;
  value: string;
}

interface Props {
  text: string;
  options: Option[];
  addAnswer: Function;
}

export const Question = ({ text, options, addAnswer }: Props) => {
  return (
    <Wrapper>
      <QuestionText>{text}</QuestionText>
      <OptionsList>
        {options.map((option, index) => {
          return (
            <li key={index}>
              <PrimaryButton onClick={() => addAnswer(option.value)}>
                {option.label}
              </PrimaryButton>
            </li>
          );
        })}
      </OptionsList>
    </Wrapper>
  );
};
