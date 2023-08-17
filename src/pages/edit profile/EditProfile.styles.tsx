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
        align-items: center;
        justify-content: space-between;
        /* gap: 3rem; */

        .edit__section {
          div {
            &:not(:last-of-type) {
              margin-bottom: .85rem;
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
              border-radius: .25rem;
              outline: none;
              font-family: var(--primary-font);

              &::placeholder {
                font-family: var(--primary-font);
                font-size: 0.75rem;
              }
            }
        }
      }
    }
  }
`;

export const Allergies = styled.section`
  .allergy__header {
    span {
        display: block;
    }
  }
`;

export const Restrictions = styled.section``;
