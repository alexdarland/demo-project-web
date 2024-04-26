import styled from "styled-components";
interface ResultsProps {
  proffessions: string[];
}

const ResultList = styled.ul`
  list-style: none;
`;
const ResultItem = styled.li`
  display: inline-block;
`;

const Pill = styled.span`
  display: inline-block;
  padding: 0.3em 0.7em;
  background: var(--color-light-blue);
  margin: 0.3em;
  border-radius: 0.5em;
`;

export const Results = ({ proffessions }: ResultsProps) => {
  return (
    <>
      <h2>Här är några yrken som passar din personlighetstyp!</h2>
      <ResultList>
        {proffessions.map((proffession, index) => (
          <ResultItem key={index}>
            <Pill>{proffession}</Pill>
          </ResultItem>
        ))}
      </ResultList>
    </>
  );
};
