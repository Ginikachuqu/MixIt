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
                    gap: .5rem;
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
                        margin-bottom: .5rem;
                        transition: .3s ease-in-out;

                        &:hover {
                            color: var(--hover-link);
                        }
                    }

                    span {
                        display: block;
                        font-size: .95rem;
                    }
                }

                .cta {
                    display: flex;
                    align-items: center;
                    gap: .25rem;
                    padding: .5rem 1.25rem;
                    border: 1px solid var(--seal-brown);
                    border-radius: 3rem;
                    background: transparent;
                    color: var(--seal-brown);
                    outline: none;
                    font-size: .95rem;
                    cursor: pointer;
                    text-transform: uppercase;
                    transition: .3s ease-in-out;
                    margin-bottom: .5rem;

                    &:hover {
                        background: var(--seal-brown);
                        color: var(--color-gray);
                    }
                }

                .rating {
                    display: flex;
                    align-items: center;
                    gap: .5rem;

                    &__stars {
                        display: flex;
                        gap: .25rem;
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
        margin: 1rem auto;
    }
`

export const Body = styled.section`
    
`