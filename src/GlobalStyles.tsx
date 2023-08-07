import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // Type-face
    /* @font-face {
        font-family: 'Lato Bold';
        src: url('./assets/fonts/Lato-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato Regular';
        src: url('./assets/fonts/Lato-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'CinzelDecorative Regular';
        src: url('./assets/fonts/CinzelDecorative-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'CinzelDecorative Bold';
        src: url('./assets/fonts/CinzelDecorative-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'CinzelDecorative Black';
        src: url('./assets/fonts/CinzelDecorative-Black.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    } */

    /* Variables */
    :root {
        --beaver: #ba756d;
        --seal-brown: #422116;
        --sand-brown: #cba560;
        --hover-link: #422116cf;
        --color-gray: #f4f4f4;
        --mid-gray: #bebebe;
        --primary-font: 'Lato', sans-serif;
        --secondary-font: 'Italiana', serif;
    }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--color-gray);
        color: var(--seal-brown);
        font-family: var(--primary-font);
    }
`

export default GlobalStyle