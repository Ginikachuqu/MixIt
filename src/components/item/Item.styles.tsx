import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 235px;
  height: 375px;
  padding: 1rem;
  border: 1px solid var(--beaver);
  border-radius: 0.85rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.45) 0px 8px 24px;
    margin-top: -0.5rem;
  }

  .recipe__container {
    text-decoration: none;
    color: var(--seal-brown);
    
    &-image {
      height: 60%;
      width: 100%;
      margin: 0 0 1.45rem;

      .image__container {
        width: 100%;
        height: 100%;
        border-radius: 0.85rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.85rem;
        }
      }
    }

    &-info {
      .recipe__details {
        .name {
          margin-bottom: 1.25rem;

          .title {
            margin-bottom: 0.45rem;
            font-weight: bold;
          }

          .chef {
            a {
              display: flex;
              gap: 0.65rem;
              text-decoration: none;
              color: var(--seal-brown);
              transition: color 0.3s ease-in-out;

              .chef__image {
                height: 30px;
                width: 30px;
                border-radius: 50%;
                background-color: #000;

                img {
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                  border-radius: 50%;
                }
              }

              .details {
                .chef__name {
                  font-size: 0.95rem;
                  display: block;
                }

                .upload__time {
                  display: block;
                  font-size: 0.75rem;
                  color: var(--beaver);
                }
              }

              &:hover {
                color: var(--hover-link);
              }
            }
          }
        }

        .reactions {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          /* position: relative;
              bottom: 0; */

          button {
            padding: 0.45rem 1.45rem;
            background: none;
            border: 1px solid var(--seal-brown);
            outline: none;
            cursor: pointer;
            font-family: var(--primary-font);
            position: relative;
            border-radius: 0.95rem;
            transition: all 0.3s ease-in-out;
            color: var(--seal-brown);

            &:hover {
              background: var(--seal-brown);
              color: var(--color-gray);

              .total__saves {
                border: 1px solid var(--beaver);
              }
            }

            .total__saves {
              position: absolute;
              top: -0.5rem;
              right: 0;
              height: 20px;
              width: 20px;
              border-radius: 50%;
              background-color: var(--seal-brown);
              color: var(--color-gray);
              display: flex;
              align-items: center;
              justify-content: center;

              span {
                font-size: 0.55rem;
                display: inline-block;
              }
            }
          }

          .reaction__like {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 1px solid var(--beaver);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--seal-brown);
            position: relative;
            transition: 0.5s ease-in-out;

            &:hover {
              background: var(--seal-brown);
              color: var(--color-gray);
            }

            .like__count {
              position: absolute;
              height: 18px;
              width: 18px;
              top: -0.5rem;
              right: -0.4rem;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: var(--beaver);
              border-radius: 50%;
              color: var(--color-gray);
              font-size: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
