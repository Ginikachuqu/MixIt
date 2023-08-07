import styled from "styled-components";

export const Wrapper = styled.nav`
  padding: .45rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: var(--color-gray);
  /* box-shadow: rgba(149, 157, 165, 0.45) 0px 8px 24px; */
  position: fixed;
  z-index: 1099;

  .logo {
    font-family: var(--secondary-font);
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--seal-brown);
  }

  .other__half {
    display: flex;
    align-items: center;

    .user__avatar-container {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 1rem;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .hamburger {
      width: 35px;
      height: 35px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 1px solid var(--beaver);
      cursor: pointer;
      transition: 0.25s cubic-bezier(1, 0, 0.13, 0.88);

      .line {
        height: 2px;
        width: 70%;
        background-color: var(--beaver);
        transition: 0.25s cubic-bezier(1, 0, 0.13, 0.88);

        &__1 {
          margin-bottom: 0.2rem;
        }

        &__2 {
          margin-bottom: 0.2rem;
        }
      }

      &:hover {
        background-color: var(--seal-brown);
        transform: scale(0.85);
        border: none;

        .line {
          background-color: var(--color-gray);
          height: 3px;
          transform: scale(0.45);
        }
      }
    }
  }
`;
