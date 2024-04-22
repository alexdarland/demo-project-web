import styled from "styled-components";

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

const OptionButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  border-radius: 4px;
  background: transparent;
  border: 1px solid var(--color-mid-grey);
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: var(--color-light-blue);
    transition: background 0.5s ease;
  }
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
              <OptionButton onClick={() => addAnswer(option.value)}>
                {option.label}
              </OptionButton>
            </li>
          );
        })}
      </OptionsList>
    </Wrapper>
  );
};
