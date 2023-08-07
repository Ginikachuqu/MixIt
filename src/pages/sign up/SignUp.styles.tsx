import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    height: 30rem;
    width: 80%;
    display: flex;
    position: relative;
    /* background: #000; */

    &__left {
      height: 100%;
      width: 40%;
      background: url("/public/images/foodiesfeed.com_cinematic-shot-of-grilling-beef-steak.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 0.85rem 0 0 0.85rem;
    }

    &__right {
      height: 100%;
      width: 65%;
      padding: 3rem;
      position: absolute;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      /* flex-direction: column; */
      background-color: var(--color-gray);
      border-radius: 2rem 0.85rem 0.85rem 2rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      &-header {
        margin-bottom: 2rem;

        h1 {
          font-size: 2rem;
          font-family: var(--secondary-font);
          margin-bottom: 1.15rem;
        }

        h2 {
          font-weight: bolder;
          font-size: 2.15rem;
        }
      }

      &-body {
        form {
          div {
            &:not(:last-of-type) {
              margin-bottom: 1.12rem;
            }

            span {
              display: block;
              font-size: 0.65rem;
              text-transform: uppercase;
              margin-bottom: 0.12rem;
            }

            input {
              padding: 0.45rem 0.45rem;
              width: 300px;
              background: none;
              border: 1px solid var(--seal-brown);
              outline: none;
              font-family: var(--primary-font);

              &::placeholder {
                font-family: var(--primary-font);
                font-size: 0.75rem;
              }
            }

            &.submit {
              button {
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
                overflow: hidden;

                div {
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  span {
                    display: flex;
                    align-items: center;
                    /* justify-content: center; */
                    gap: 0.5rem;
                  }
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
                  font-size: 1.005rem;
                  color: var(--seal-brown);
                  margin-right: 0.5rem;
                  transform: rotateY(180deg);
                }

                span {
                  font-size: 0.75rem;
                }
              }
            }
          }
        }

        .demarcate {
          margin: 1.5rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;

          span {
            &.line {
              display: inline-block;
              width: 100px;
              height: 1px;
              background-color: var(--seal-brown);
            }

            &.text {
              display: inline-block;
              text-transform: uppercase;
              font-size: 0.65rem;
            }
          }
        }

        .transfer {
          text-align: center;
          font-size: 0.85rem;

          a {
            text-decoration: none;
            color: var(--seal-brown);
            transition: 0.3s ease-in;

            &:hover {
              color: var(--beaver);
            }
          }
        }
      }
    }
  }
`;
