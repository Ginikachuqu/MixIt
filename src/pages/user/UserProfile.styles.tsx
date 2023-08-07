import { styled } from "styled-components";

export const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    padding-top: 4.25rem;
    
    .wrapper__inner {
        display: flex;
        gap: 1rem;
        width: 90%;
        margin: 0 auto;
    }
    /* background: #000; */
`

export const LeftSidebar = styled.section`
    max-width: 350px;
    padding: 1.5rem;
    background: var(--color-gray);
    border-radius: .65rem;
    color: var(--seal-brown);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .left__sidebar-inner {

        .user {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &__avatar {
                height: 200px;
                width: 200px;
                border-radius: 50%;
                margin-bottom: 1.85rem;
                
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }

            &__info {
                display: flex;
                flex-direction: column;
                /* justify-content: center; */
                align-items: center;

                .user__name {
                    margin-bottom: 1.25rem;

                    h3 {
                        font-size: 1.5rem;
                        margin-bottom: .25rem;
                    }

                    .followers__count {
                        display: flex;
                        justify-content: center;
                        gap: 1rem;
                        font-weight: bold;

                        span {
                            font-size: .8rem;
                            display: inline-block;

                            &.followers {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                padding-right: 1rem;
                                border-right: 1px solid var(--seal-brown);
                            }
                            &.following {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                        }
                    }
                }
                
                .user__bio {
                    margin-bottom: 1.85rem;
                    p {
                        font-size: .85rem;
                        text-align: center;
                    }
                }

                .user__location {
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                .user__socials {
                    font-size: 1.85rem;
                    
                    a {
                        text-decoration: none;
                        color: var(--seal-brown);
                        transition: .5s ease-in;

                        &:hover {
                            color: var(--beaver);
                        }

                        &:first-child {
                            margin-right: .5rem;
                        }
                    }
                }
            }
        }
    }
`

export const RightSidebar = styled.section`
    width: 80%;
    /* height: 60vh; */
    padding: 0 .5rem;
    /* background: #000; */

    .picker__slider {
        width: 100%;
        margin-bottom: 1.25rem;

        &-links {
            a {
                text-decoration: none;
                display: inline-block;
                padding: .65rem .95rem;
                border-radius: 3rem;
                color: var(--seal-brown);
                
                &.active {
                    background-color: var(--seal-brown);
                    color: var(--color-gray);
                    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                }

                &:not(:last-of-type) {
                    margin-right: 1.25rem;
                }
            }
        }
    }

    .display__board {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }
`