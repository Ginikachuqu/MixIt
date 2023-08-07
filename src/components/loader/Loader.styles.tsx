import { styled } from "styled-components";

export const Wrapper = styled.div`
  font-size: 0.95rem;
  text-align: center;
  font-weight: bold;

  span {
    color: var(--seal-brown);
    animation: animateIn 6s cubic-bezier(0.635, -0.45, 0.345, 1.21) infinite
      both;
    display: inline-block;
    margin-left: 0.35rem;
    transform: translateX(10rem);

    &:nth-child(1) {
      animation-delay: 0.16667s;
    }
    &:nth-child(2) {
      animation-delay: 0.33333s;
    }
    &:nth-child(3) {
      animation-delay: 0.5s;
    }
    &:nth-child(4) {
      animation-delay: 0.66667s;
    }
    &:nth-child(5) {
      animation-delay: 0.83333s;
    }
    &:nth-child(6) {
      animation-delay: 1s;
    }
    &:nth-child(7) {
      animation-delay: 1.16667s;
    }
    &:nth-child(8) {
      animation-delay: 1.333333s;
    }
    &:nth-child(9) {
      animation-delay: 1.5s;
    }
    &:nth-child(10) {
      animation-delay: 1.66666s;
    }
  }

  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: translateX(-1rem);
    }
    20% {
      opacity: 0.75;
      transform: translateX(0);
    }

    65% {
      /* color: var(--seal-brown); */
      opacity: 0.05;
    }
    100% {
      opacity: 0;
      transform: translateX(-5rem);
    }
  }

  &:hover {
    color: var(--color-gray) !important;
  }
`;
