import { Routes } from '../../@types/shared';

import Logo from '../Logo';

import { StyledLink, StyledNav, StyledUl } from './styled';

interface Route {
  path: Routes;
  text: string;
}

const routes: Route[] = [
  { path: Routes.IndexPage, text: 'LOGO' },
  { path: Routes.Pizzas, text: 'Pizza Menu' },
  { path: Routes.SliceMasters, text: 'SliceMasters' },
  { path: Routes.Order, text: 'Order Ahead' },
];

export default function Nav(): JSX.Element {
  return (
    <StyledNav>
      <StyledUl>
        {routes.map((route, index) => (
          <li key={index}>
            <StyledLink to={route.path}>
              {route.text === 'LOGO' ? <Logo /> : route.text}
            </StyledLink>
          </li>
        ))}
      </StyledUl>
    </StyledNav>
  );
}
