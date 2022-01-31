import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  margin-bottom: 3rem;
`;

export const StyledUl = styled.ul`
  display: flex;

  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  gap: 2em;

  text-align: center;
`;

export const StyledLink = styled(Link)`
  --rotate: -2deg;

  display: inline-block;

  font-size: 1.5em;

  transform: rotate(var(--rotate));

  &:hover {
    --rotate: 3deg;

    color: var(--red);
  }
`;
