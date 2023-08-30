import { styled } from "styled-components";

export const Wrapper = styled.section`
  padding-top: 4.5rem;
  width: 100%;

  .hero {
    width: 90%;
    height: 500px;
    /* background: #000; */
    margin: 0 auto;

    &__inner {
      display: flex;
      height: 100%;

      &-left {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;

          svg {
            color: green;
          }

          span {
            font-size: 1.25rem;
          }
        }

        .recipe__name {
          text-align: center;
          margin-bottom: 1rem;

          h1 {
            font-size: 2.25rem;
          }
        }

        .recipe__author {
          text-align: center;
          margin-bottom: 1rem;

          .author__name {
            display: inline-block;
            text-transform: uppercase;
            text-decoration: none;
            color: var(--seal-brown);
            margin-bottom: 0.5rem;
            transition: 0.3s ease-in-out;

            &:hover {
              color: var(--hover-link);
            }
          }

          span {
            display: block;
            font-size: 0.95rem;
          }
        }

        .cta {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 1.25rem;
          border: 1px solid var(--seal-brown);
          border-radius: 3rem;
          background: transparent;
          color: var(--seal-brown);
          outline: none;
          font-size: 0.95rem;
          cursor: pointer;
          text-transform: uppercase;
          transition: 0.3s ease-in-out;
          margin-bottom: 0.5rem;

          &:hover {
            background: var(--seal-brown);
            color: var(--color-gray);
          }
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          &__stars {
            display: flex;
            gap: 0.25rem;
          }
        }
      }

      &-right {
        width: 50%;
        height: 100%;

        .image__container {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  hr {
    width: 90%;
    margin: 2rem auto;
  }
`;

export const Body = styled.section`
  position: relative;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  /* margin-top: 2rem; */

  .body__inner {
    width: 65%;
    .recipe__duration {
      margin-bottom: 1rem;

      p {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-weight: bold;

        svg {
          font-size: 1.45rem;
        }
      }
    }

    .recipe__description {
      margin-bottom: 2rem;

      p {
        text-align: justify;
        font-size: 1.15rem;
      }
    }

    .ingredients {
      max-width: 50%;

      .header {
        margin-bottom: 0.5rem;
      }
      span.servings {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: var(--seal-brown);
        border-radius: 5rem;
        color: var(--color-gray);
        margin-bottom: 0.75rem;
      }

      ul {
        margin: 0.75rem 0 1.85rem;

        li {
          list-style: none;
          padding: 0.5rem 0;
          border-bottom: 1px dashed var(--mid-gray);
        }
      }
    }

    .procedure {
      div {
        margin-bottom: 3rem;

        span {
          display: inline-block;
          font-size: 1.15rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1.15rem;
          text-align: justify;
        }
      }
    }

    .rating {
      .noAuth {
        padding: 1rem;
        text-align: center;
        background: var(--seal-brown);
        border-radius: 5px;
        margin-bottom: 1.5rem;

        p {
          font-size: 1.25rem;
          color: var(--color-gray);

          a {
            /* text-decoration: none; */
            color: var(--color-gray);
            transition: 0.3s ease-in-out;

            &:hover {
              color: var(--mid-gray);
            }
          }
        }
      }

      .rate {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.85rem;
        font-size: 1.25rem;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .stars {
            display: block;
            margin-bottom: 0.85rem;

            svg {
                cursor: pointer;
                margin-right: .25rem;
            }
          }

          button {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            padding: 0.5rem 1.25rem;
            border: 1px solid var(--seal-brown);
            border-radius: 3rem;
            background: transparent;
            color: var(--seal-brown);
            outline: none;
            font-size: 0.95rem;
            cursor: pointer;
            text-transform: uppercase;
            transition: 0.3s ease-in-out;
            margin-bottom: 0.5rem;

            &:hover {
              background: var(--seal-brown);
              color: var(--color-gray);
            }
          }
        }
      }
    }
  }
`;

export const Comments = styled.section`
  padding: 1rem 1.15rem;
  border: 1px solid var(--seal-brown);
  border-radius: 5px;
  margin: 2rem 0;

  .header {
    margin-bottom: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }

  .comment {
    display: flex;
    margin-bottom: 1.25rem;
    
    .user__avatar-container {
      height: 50px;
      width: 50px;
      border-radius: 50%;

      img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .comment__info {
        .name {
            span {
                font-size: 1.12rem;

                &.display__name {
                    margin-right: .5rem;
                }

                &.username {
                    color: #939290;
                }
            }
        }

        .timestamp {
            margin-bottom: .25rem;

            span {
                font-size: .9rem;
                color: #939290;
            }
        }
    }
  }

  .add__comment {
    display: flex;
    /* align-items: center; */

    .user__avatar-container {
      height: 50px;
      width: 50px;
      border-radius: 50%;

      img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .text__area {
      width: 100%;

      &-inner {
        width: 100%;
        padding: 0.25rem 0.65rem;
        border: 1px solid var(--seal-brown);
        border-radius: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        textarea {
          width: 92%;
          background: none;
          border: none;
          /* overflow: hidden; */
          overflow-wrap: break-word;
          outline: none;
          font-family: var(--primary-font);
          resize: none;

          ::placeholder {
            font-family: var(--primary-font);
          }
        }

        button {
          background: none;
          border: none;
          outline: none;
          font-size: 1.5rem;
          color: var(--seal-brown);
          cursor: pointer;
          transition: 0.3 ease-in-out;

          &:hover {
            color: var(--hover-link);
          }
        }
      }
    }
  }
`;

export const Sidebar = styled.section`
  position: sticky;
  padding: 1rem;
  width: 30%;
  min-height: 120px;
  max-height: 130px;
  border: 1px solid var(--mid-gray);
  background: var(--color-gray);
  border-radius: 0.85rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .btn {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0.75rem 0;
    border-radius: 4rem;
    outline: none;
    border: none;
    text-transform: uppercase;
    border: 1px solid var(--seal-brown);
    color: var(--seal-brown);
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
