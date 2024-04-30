import styled from "styled-components";

export const PrimaryButton = styled.button`
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
