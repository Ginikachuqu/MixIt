import { styled } from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    padding-top: 1.25rem;

    .content {
        width: 100%;
        height: 100%;
        /* background: #fff; */

        .video__container {
            width: 100%;
            height: 100%;

            video {
                width: 100%;
                height: 100%;
            }
        }
    }
`