import { styled } from "styled-components";

export const Wrapper = styled.section`
  padding: 1rem 4rem;

  .hero {
    width: 100%;
    height: 65vh;
    margin-top: 7.25rem;

    &__content {
      width: 100%;
      height: 100%;
      display: flex;
      gap: 2rem;

      &-left {
        height: 100%;
        width: 60%;

        .video__container {
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;

          video {
            height: 100%;
            width: 100%;
            object-fit: fill;
            border-radius: 0.5rem;
          }
        }
      }

      &-right {
        width: 40%;

        .copy {
          margin-bottom: 1.5rem;
          h1 {
            font-family: var(--secondary-font);
            font-size: 2.75rem;
            line-height: 1;
            margin-bottom: 0.5rem;
          }

          p {
            font-size: 1rem;
          }
        }

        .search__recipe {
          margin-top: 4rem;

          form {
            width: 100%;
            padding: 0.45rem 0.85rem;
            background-color: var(--color-gray);
            border-radius: 4rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border: 1px solid var(--mid-gray);

            .search__container {
              width: 90%;

              input {
                width: 100%;
                padding: 0.5rem;
                border-radius: 4rem;
                border: none;
                outline: none;
                background: none;
                font-family: var(--primary-font);

                &::placeholder {
                  font-style: italic;
                }
              }
            }

            .search__button {
              padding: 0.5rem 1rem;
              border-radius: 2rem;
              background-color: var(--seal-brown);
              border: none;
              outline: none;
              cursor: pointer;
              color: var(--color-gray);
              text-transform: uppercase;
              font-size: 0.75rem;
              font-weight: bold;

              /* svg {
                                stroke: var(--color-gray);
                            } */
            }
          }
        }
      }
    }
  }

  .recipe__dashboard {
    margin-top: 3rem;
    width: 100%;

    &-header {
      margin-bottom: 1.5rem;

      h2 {
        font-family: var(--secondary-font);
        font-size: 2.15rem;
        line-height: 1.8;
      }

      p {
        font-size: 0.95rem;
      }
    }

    &-body {
      .header {
        display: inline-block;
        margin: 1.75rem 0 1.5rem;
        text-decoration: none;
        color: var(--seal-brown);

        h3 {
          font-size: 1.5rem;
          font-family: var(--secondary-font);
          /* font-style: italic; */
        }

      }

      &-content {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
      }

      .footer {
        display: block;
        margin-top: .85rem;
        display: flex;
        align-items: center;
        gap: .35rem;
        text-decoration: none;
        color: var(--seal-brown);
        transition: color .3s ease-in-out;

        &:hover {
          color: var(--beaver);
        }
      }
    }
  }
`;
