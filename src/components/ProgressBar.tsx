import styled from "styled-components";

interface WrapperProps {
  $progress: number;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 2.5px);
    left: 0;
    height: 5px;
    width: 100%;
    background: var(--color-light-grey);
    z-index: -2;
  }

  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 2.5px);
    left: 0;
    height: 5px;
    width: 100%;
    transform-origin: left;
    transform: scaleX(${(props) => `${props.$progress}`});
    transition: transform 0.6s ease;
    background: var(--color-primary);
    z-index: -1;
  }
`;

interface ProgressItemProps {
  $completed: boolean;
}

const ProgressItem = styled.div<ProgressItemProps>`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: var(--color-light-grey);

  ${(props) =>
    props.$completed &&
    `
    background: var(--color-primary);
    border: 1px solid white;
  `}
`;

interface ProgressBarProps {
  length: number;
  current: number;
}

export const ProgressBar = ({ length, current }: ProgressBarProps) => {
  const progress = current / (length - 1);

  return (
    <Wrapper $progress={progress}>
      {[...Array(length)].map((_, index) => (
        <ProgressItem key={index} $completed={current <= length} />
      ))}
    </Wrapper>
  );
};
