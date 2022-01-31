import styled from 'styled-components';

import stripes from '../../assets/images/stripes.svg';

export const StyledLogo = styled.div`
  --borderSize: 1em;

  background: white url(${stripes});
  background-size: 150em;

  border: var(--borderSize) solid white;

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05);

  display: flex;

  font-size: clamp(0.1rem, 0.65vw, 0.6rem);

  height: 30em;

  width: 30em;
`;

export const StyledInnerWrapper = styled.div`
  align-content: center;

  background-color: white;

  display: grid;

  flex: 1;

  grid-template-rows: 20% 1fr 1fr;

  margin: var(--borderSize);
`;

export const StyledEst = styled.span`
  align-self: center;

  font-size: 1.5em;
`;

export const StyledH1 = styled.h1`
  display: grid;

  align-items: center;

  gap: 2em;

  grid-row: 2 / span 2;

  transform: translateY(-0.7em);
`;

export const StyledSlicks = styled.span`
  display: block;

  perspective: 10rem;

  text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);

  transform: scale(1.4);
`;

export const StyledLetter = styled.span`
  --rotate: -10deg;
  --rotateX: 0deg;
  --scale: 1;
  --translateX: 0;
  --translateY: 0;

  font-size: 5em;

  color: var(--red);

  transform: scale(var(--scale)) rotate(var(--rotate))
    translateX(var(--translateX)) translateY(var(--translateY))
    rotateX(var(--rotateX));

  display: inline-block;

  line-height: 1;

  transition: transform 0.3s;

  &.S {
    --translateX: -0.05;
  }

  &.l {
    --rotate: 2deg;
    --scale: 1.4;
    --translateX: 0.05em;
    --translateY: -0.05em;
  }

  &.i {
    --scale: 0.9;
    --translateX: 0.1em;
    --translateY: -0.1em;
  }

  &.c {
    --rotate: 3deg;
    --scale: 0.9;
    --translateX: 0.1em;
    --translateY: 0.23em;
  }

  &.k {
    --rotate: -12deg;
    --scale: 1.2;
    --translateX: 0.06em;
  }

  &.apos {
    --translateX: 0.1em;
  }

  &.s {
    --rotate: 12deg;
    --scale: 0.9;
    --translateY: -0.14em;
  }
`;

export const StyledSlices = styled.span`
  font-size: 3.2em;

  letter-spacing: 0.2em;

  transform: translateY(-0.15em);
`;
