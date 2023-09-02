import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30%;
  padding: 2rem 3rem;
  background: var(--color-gray);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: transform 0.5s ease-in;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  z-index: 1100;

  header {
    width: 100%;

    .close__icon {
      svg {
        position: relative;
        left: 100%;
        font-size: 1.35rem;
        color: var(--beaver);
        transition: 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

export const Links = styled.nav`
  margin-top: 3rem;

  ul {
    list-style: none;
    margin-bottom: 2rem;

    li {
      &:not(:last-of-type) {
        margin-bottom: 1.25rem;
      }

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: var(--seal-brown);
        font-weight: bold;
        font-size: 1.35rem;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: var(--hover-link);
        }
      }
    }
  }

  .media__links {
    .ins {
      margin-bottom: 1.65rem;

      span {
        font-size: 1.09rem;
      }
    }

    .links {
      margin-bottom: 1.25rem;

      span {
        display: inline-block;
        margin-right: 0.65rem;
        a {
          font-size: 1.25rem;
          color: var(--seal-brown);
          transition: color 0.3s ease-in-out;

          &:hover {
            color: var(--hover-link);
          }
        }
      }
    }
  }

  button.logout {
    padding: 0.55rem 2rem;
    border-radius: 4rem;
    border: 1px solid var(--seal-brown);
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    overflow: hidden;
    color: var(--seal-brown);
    outline: none;
    transition: 0.2s ease-in-out;

    &:hover {
      margin-top: -2px;
      /* .arrow {
        color: var(--color-gray);
        transform: translateX(0);
      } */
    }
  }

  .cta {
    padding: 0.15rem 2rem;
    border-radius: 4rem;
    border: 1px solid var(--seal-brown);
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: var(--seal-brown);
    outline: none;
    text-decoration: none;
    transition: 0.2s ease-in-out;

    span:first-of-type {
      display: inline-block;
      font-weight: bold;
      margin-right: 0.5rem;
      line-height: 1.8;
    }

    .arrow {
      transform: translateX(1000%);
      transition: transform 0.3s ease-in-out;
      color: var(--seal-brown);
    }

    &:hover {
      margin-top: -2px;
      .arrow {
        color: var(--color-gray);
        transform: translateX(0);
      }
    }
  }
`;
