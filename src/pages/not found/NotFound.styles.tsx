import { styled } from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    padding-top: 1.25rem;

    .content {
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .video__container {
            width: 100%;
            height: 100%;

            video {
                width: 100%;
                height: 100%;
            }
        }

        a {
            display: inline-block;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            width: 120px;
            text-align: center;
            border: 1px solid var(--seal-brown);
            color: var(--seal-brown);
            text-transform: uppercase;
            text-decoration: none;
            font-size: 0.75rem;
            font-weight: bold;
            transition: color .3s ease-in-out;
            
            &:hover {
                background-color: var(--seal-brown);
                color: var(--color-gray);
            }
        }
    }
`