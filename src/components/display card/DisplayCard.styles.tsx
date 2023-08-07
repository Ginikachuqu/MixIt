import { styled } from "styled-components";

export const Wrapper = styled.a`
    /* padding: .25rem; */
    height: 190px;
    max-width: 200px;
    border-radius: .45rem;
    pointer-events: none;

    .wrapper__inner {
        display: flex;
        margin-top: 7rem;

        .recipe__details {
            position: relative;

            
            span {
                display: inline-block;
                font-size: .85rem;

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
    
`