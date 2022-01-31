import { createGlobalStyle } from 'styled-components';

import frenchFriesWoff from '../assets/fonts/frenchfries.woff';

const headLevels = new Array<null>(6).fill(null);

const StyledTypography = createGlobalStyle`
  @font-face {
    font-family: FrenchFries;
    
    src: url(${frenchFriesWoff});
  }

  html {
    color: var(--black);

    font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p,
  li {
    letter-spacing: 0.05rem;
  }

  ${headLevels.map(function (_, index) {
    return {
      [`h${index + 1}`]: {
        margin: 0,
      },
    };
  })}

  a {
    color: var(--black);

    text-decoration-color: var(--red);
    text-decoration-skip-ink: none;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default StyledTypography;
