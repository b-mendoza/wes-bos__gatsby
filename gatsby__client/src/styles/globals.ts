import { createGlobalStyle } from 'styled-components';

import bg from '../assets/images/bg.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2e2e2e;
    --grey: #efefef;
    --red: #ff4949;
    --white: #fff;
    --yellow: #ffc600;
  }

  html {
    background-attachment: fixed;
    background-image: url(${bg});
    background-size: 45rem;

    box-sizing: border-box;

    font-size: 62.5%;

    scrollbar-color: var(--red) var(--white);
    scrollbar-width: thin;
  }

  body {
    font-size: 1.4rem;

    &::-webkit-scrollbar {
      width: 1.2rem;
    }

    &::-webkit-scrollbar-track {
      background: var(--white);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--red);

      border-radius: 0.6rem;
      border: 0.4rem solid var(--white);
    }

    @media (min-width: 280px) {
      font-size: 1.6rem;
    }

    @media (min-width: 576px) {
      font-size: 1.8rem;
    }
  }

  a {
    color: inherit;

    text-decoration: none;
  }

  ul,
  li {
    list-style: none;

    margin: 0;

    padding: 0;
  }

  button {
    --cast: 0.2rem;

    background: var(--red);

    border: 0;
    border-radius: 0.2rem;

    box-shadow: var(--cast) var(--cast) 0 var(--grey);

    color: white;

    cursor: pointer;

    padding: 0.3em 0.5em;

    text-shadow: 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);

    transition: all 0.2s;

    &:hover {
      --cast: 0.4rem;
    }
  }

  .gatsby-image-wrapper img[src*='base64\\,'] {
    image-rendering: pixelated;
  }
`;

export default GlobalStyles;
