import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding-top: 7.25rem;

  .content {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .top {
      display: flex;
      align-items: center;
      gap: 2.5rem;

      .profile__photo-container {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        position: relative;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .edit__icon {
          position: absolute;
          top: 9rem;
          right: 20px;
          width: 30px;
          height: 30px;
          background-color: var(--seal-brown);
          border-radius: 50%;
          color: var(--color-gray);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease-in-out;
          cursor: pointer;

          &:hover {
            background-color: var(--hover-link);
          }
        }
      }

      .user {
        &__name {
          margin-bottom: 0.25rem;
        }

        &__location {
          color: var(--mid-gray);
        }
      }
    }

    .bottom {
      form {
        width: 100%;
        /* background: #000; */
        padding: 1rem;
        display: flex;
        /* align-items: center; */
        /* justify-content: space-between; */
        /* gap: 3rem; */

        .edit__section {
          &-left {
            width: 50%;
            div {
              &:not(:last-of-type) {
                margin-bottom: 0.85rem;
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
                border-radius: 0.25rem;
                outline: none;
                font-family: var(--primary-font);

                &::placeholder {
                  font-family: var(--primary-font);
                  font-size: 0.75rem;
                }
              }
            }
          }

          &-right {
            width: 50%;
          }
        }
      }
    }
  }
`;

export const Allergies = styled.section`
  .allergy__header {
    margin-bottom: 0.5rem;

    span {
      display: block;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  .allergy__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #000; */

    .allergy__item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.15rem;

      .allergy__name {
        width: 100%;
        margin-bottom: 0.75rem;

        p {
          width: 100%;
          background: var(--color-gray);
          padding: 0.65rem;
          border-radius: 0.25rem;
          outline: none;
          cursor: auto;
          border: 1px solid var(--mid-gray);
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

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
      button {
        font-size: 1.65rem;
        padding: 0.15rem 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: transparent;
        border: 1px solid var(--seal-brown);
        outline: none;
        border-radius: 0.5rem;
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
`;

export const Restrictions = styled.section`
  margin-top: 1.15rem;

  .restriction__header {
    margin-bottom: 0.5rem;

    span {
      display: block;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  .restriction__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #000; */

    .restriction__item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.15rem;

      .restriction__name {
        width: 100%;
        margin-bottom: 0.75rem;

        p {
          width: 100%;
          background: var(--color-gray);
          padding: 0.65rem;
          border-radius: 0.25rem;
          outline: none;
          cursor: auto;
          border: 1px solid var(--mid-gray);
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

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
      button {
        font-size: 1.65rem;
        padding: 0.15rem 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: transparent;
        border: 1px solid var(--seal-brown);
        outline: none;
        border-radius: 0.5rem;
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
`;
