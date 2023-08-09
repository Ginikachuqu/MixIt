import { styled } from "styled-components";

export const Wrapper = styled.a`
  display: inline-block;
  height: 100%;
  max-width: 100%;
  border-radius: 0.45rem;
  position: relative;
  
  .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, .35);
      border-radius: 0.45rem;
  }

  .wrapper__inner {
    display: flex;
    /* margin-top: 7rem; */
    position: relative;

    .recipe__details {
      position: relative;
      margin: 7.5rem 0 0;

      span {
        display: inline-block;
        font-size: 0.85rem;
        font-weight: bold;

        a {
          text-decoration: none;
          color: var(--color-gray);
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
