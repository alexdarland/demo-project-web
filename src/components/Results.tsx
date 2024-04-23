interface ResultsProps {
  proffessions: string[];
}

export const Results = ({ proffessions }: ResultsProps) => {
  return (
    <>
      <h2>Here are some suggestions based on your answers!</h2>
      {proffessions?.map((proffession) => (
        <p>{proffession}</p>
      ))}
    </>
  );
};
