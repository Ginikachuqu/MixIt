import { styled } from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  padding-top: 4.25rem;

  .main__content {
    height: 100%;
    width: 100%;

    .editor {
      max-width: 700px;
      margin: 0 auto;

      .image__uploader {
        min-height: 50px;
        margin-bottom: 0.5rem;
        padding: 1.5rem 1rem;
        cursor: pointer;
        /* border: 1px dashed var(--seal-brown); */

        .drop__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .icon {
            font-size: 1.85rem;
          }

          p {
            font-size: 0.95rem;
            font-weight: bold;
          }

          span {
            font-size: 0.75rem;
          }
        }
      }

      .publish__button {
        font-size: 1.65rem;
        padding: 0.25rem 1.75rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: transparent;
        border: 1px solid var(--seal-brown);
        outline: none;
        border-radius: 3rem;
        color: var(--seal-brown);
        transition: 0.3s ease-in-out;
        cursor: pointer;
        font-family: var(--primary-font);
        margin: 2rem auto;

        &:hover {
          background: var(--seal-brown);
          color: var(--color-gray);
        }

        span {
          font-size: 0.95rem;
          text-transform: uppercase;
        }
      }
    }
  }
`;

export const Title = styled.div`
  min-height: 100px;
  background: #fff;
  margin-bottom: 0.5rem;
  padding: 0.85rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .title__content {
    .title {
      margin-bottom: 0.65rem;
      h1 {
        background: var(--color-gray);
        padding: 0.5rem 0.85rem;
        border-radius: 0.25rem;
        font-size: 1.15rem;
        font-weight: normal;
        outline: none;

        &:empty:before {
          content: attr(data-placeholder);
          color: var(--mid-gray);
        }
      }
    }

    .desc {
      margin-bottom: 0.25rem;
      width: 100%;

      p {
        background: var(--color-gray);
        padding: 0.5rem 0.85rem;
        border-radius: 0.25rem;
        font-size: 0.95rem;
        font-weight: normal;
        outline: none;

        &:empty:before {
          content: attr(data-placeholder);
          color: var(--mid-gray);
        }
      }
    }
  }

  .recipe__servings {
    margin-top: 0.75rem;

    span {
      display: block;
      color: var(--seal-brown);
    }

    .servings {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1.5rem 0;

      div {
        padding: 0.65rem 0.5rem;
        width: 10rem;
        background: var(--color-gray);
        border-radius: 0.25rem;

        span {
          font-size: 0.85rem;
          font-weight: normal;
          /* cursor: pointer; */
          outline: none;

          &:empty:before {
            content: attr(data-placeholder);
            color: var(--mid-gray);
          }
        }
      }
    }
  }
`;

export const Ingredient = styled.section`
  min-height: 100px;
  background: #fff;
  margin-bottom: 0.5rem;
  padding: 0.85rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .ingredient__content {
    &-header {
      margin-bottom: 0.85rem;

      h1 {
        font-size: 1.25rem;
        text-transform: uppercase;
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .ingredient__item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .75rem;

        .drag__icon {
          font-size: 1.65rem;
          color: var(--seal-brown);

          svg {
            cursor: move;
          }
        }

        .ingredient__name {
          width: 90%;

          p {
            width: 100%;
            background: var(--color-gray);
            padding: 0.65rem;
            border-radius: 0.25rem;
            outline: none;

            &:empty:before {
              content: attr(data-placeholder);
              color: var(--mid-gray);
            }
          }
        }

        .remove__icon {
          font-size: 1.65rem;

          svg {
            cursor: pointer;
            transition: 0.3s ease-in-out;

            &:hover {
              color: var(--beaver);
            }
          }
        }
      }

      .controls {
        margin-top: 2rem;

        button {
          font-size: 1.65rem;
          padding: 0.25rem 1.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--seal-brown);
          outline: none;
          border-radius: 3rem;
          color: var(--seal-brown);
          transition: 0.3s ease-in-out;
          cursor: pointer;
          font-family: var(--primary-font);

          &:hover {
            background: var(--seal-brown);
            color: var(--color-gray);
          }

          span {
            font-size: 0.95rem;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;

export const Steps = styled.section`
  min-height: 100px;
  background: #fff;
  margin-bottom: 0.5rem;
  padding: 0.85rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .steps__content {
    &-header {
      margin-bottom: 0.85rem;

      h1 {
        font-size: 1.25rem;
        text-transform: uppercase;
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .steps__item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .75rem;

        .drag__icon {
          font-size: 1.65rem;
          color: var(--seal-brown);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .counter__container {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.5rem;
            padding: 0.45rem;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            color: var(--color-gray);
            background: var(--seal-brown);
          }

          svg {
            cursor: move;
          }
        }

        .steps__name {
          width: 90%;

          p {
            width: 100%;
            background: var(--color-gray);
            padding: 0.65rem;
            border-radius: 0.25rem;
            outline: none;
            cursor: auto;

            &:empty:before {
              content: attr(data-placeholder);
              color: var(--mid-gray);
            }
          }
        }

        .remove__icon {
          font-size: 1.65rem;

          svg {
            cursor: pointer;
            transition: 0.3s ease-in-out;

            &:hover {
              color: var(--beaver);
            }
          }
        }
      }

      .controls {
        margin-top: 2rem;

        button {
          font-size: 1.65rem;
          padding: 0.25rem 1.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--seal-brown);
          outline: none;
          border-radius: 3rem;
          color: var(--seal-brown);
          transition: 0.3s ease-in-out;
          cursor: pointer;
          font-family: var(--primary-font);

          &:hover {
            background: var(--seal-brown);
            color: var(--color-gray);
          }

          span {
            font-size: 0.95rem;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
