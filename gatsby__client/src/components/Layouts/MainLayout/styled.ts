import styled from 'styled-components';

import stripes from '../../../assets/images/stripes.svg';

export const StyledSiteBorder = styled.div`
  background: white url(${stripes});
  background-size: 180rem;

  border: 0.5rem solid white;

  box-shadow: 0 0 0.5rem 0.3rem rgba(0, 0, 0, 0.05);

  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);

  max-width: 100rem;

  padding: 1em;
  padding: clamp(0.5em, 1vw, 1em);

  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export const StyledContent = styled.div`
  background-color: white;

  padding: 1em;
`;
