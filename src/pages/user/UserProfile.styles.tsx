import { styled } from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  padding-top: 4.25rem;

  .wrapper__inner {
    /* display: flex; */
    gap: 1rem;
    width: 90%;
    margin: 0 auto;
  }
  /* background: #000; */
`;

export const TopSection = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
  margin-bottom: 3rem;
  background: var(--color-gray);
  border-radius: 0.65rem;
  color: var(--seal-brown);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* border-bottom: 1px solid var(--seal-brown); */

  .top__section-inner {
    display: flex;
    justify-content: space-between;

    .user {
      display: flex;
      align-items: center;
      gap: 2rem;

      &__avatar {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        margin-bottom: 1.85rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      &__info {
        max-width: 900px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        /* align-items: center; */

        .user__name {
          margin-bottom: .85rem;

          h3 {
            font-size: 1.5rem;
            margin-bottom: 0.25rem;
          }

          .followers__count {
            display: flex;
            /* justify-content: center; */
            gap: 1rem;
            font-weight: bold;

            a {
              text-decoration: none;
              color: var(--seal-brown);
              font-size: 0.8rem;
              display: inline-block;
              transition: 0.3s ease-in-out;

              &:hover {
                color: var(--hover-link);
              }

              &.followers {
                display: inline-block;
                padding-right: 1rem;
                border-right: 1px solid var(--seal-brown);

                & > span {
                  margin-right: 0.25rem;
                }
              }
              &.following {
                display: inline-block;

                & > span {
                  margin-right: 0.25rem;
                }
              }
            }
          }
        }

        .user__bio {
          margin-bottom: 0.85rem;
          max-width: 370px;

          p {
            font-size: 0.8rem;
            text-align: justify;
          }
        }

        .user__restrictions {
          margin-bottom: .95rem;
          max-width: 70%;
          /* background-color: #000; */

          .header {
            margin-bottom: .25rem;

            span {
              font-size: .9rem;
              font-style: italic;
              color: var(--sand-brown);
            }
          }

          .body {
            ul {
              display: flex;
              flex-wrap: wrap;
              gap: .5rem;

              li {
                list-style: none;
                padding: .5rem 1.25rem;
                background-color: var(--seal-brown);
                color: var(--color-gray);
                border-radius: 10rem;
                font-size: .75rem;
              }

              span {
                display: inline-block;
                font-size: .9rem;
                align-self: center;
                font-style: italic;
              }
            }
          }
        }

        .user__deet {
            display: flex;

          .user__location {
            font-weight: bold;
            margin: 0 1rem 1rem 0;
            color: var(--seal-brown);
            display: flex;
            align-items: center;

            span {
                display: inline-block;
            }
          }

          .user__socials {
            font-size: 1.15rem;

            a {
              text-decoration: none;
              color: var(--seal-brown);
              transition: 0.3s ease-in-out;

              &:hover {
                color: var(--hover-link);
              }

              &:not(:last-child) {
                margin-right: 0.5rem;
              }
            }
          }
        }
      }
    }

    .edit__tools {
      font-size: 1rem;

      a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: var(--seal-brown);
        transition: color 0.3s ease-in-out;

        &:hover {
          color: var(--hover-link);
        }

        svg {
          margin-right: 0.45rem;
        }
      }
    }
  }
`;

export const BottomSection = styled.section`
  width: 100%;
  /* height: 60vh; */
  padding: 0 0.5rem;
  /* background: #000; */

  .picker__slider {
    width: 100%;
    margin-bottom: 2rem;

    &-links {
      display: flex;
      justify-content: center;
      a {
        text-decoration: none;
        display: inline-block;
        padding: 0.65rem 0.95rem;
        border-radius: 3rem;
        color: var(--seal-brown);

        &.active {
          background-color: var(--seal-brown);
          color: var(--color-gray);
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }

        &:not(:last-of-type) {
          margin-right: 1.25rem;
        }
      }
    }
  }

  .display__board {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }
`;
