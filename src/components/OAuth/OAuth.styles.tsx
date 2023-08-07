import { styled } from "styled-components";

export const Button = styled.button`
  padding: 0.25rem 0.95rem;
  width: 100%;
  border: 1px solid var(--seal-brown);
  background: transparent;
  border-radius: 3rem;
  transition: 0.3s ease-in;
  cursor: pointer;
  font-family: var(--primary-font);
  text-transform: uppercase;
  margin-bottom: 0.85rem;
  color: var(--seal-brown);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: var(--seal-brown);
    color: var(--color-gray);
    border: 1px solid var(--beaver);

    svg {
      color: var(--color-gray);
    }
  }

  svg {
    font-size: 1.8rem;
    color: var(--seal-brown);
    margin-right: 0.5rem;
  }

  span {
    font-size: 0.75rem;
  }
`;
