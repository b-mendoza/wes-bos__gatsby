import { Link } from 'gatsby';

import { Routes } from '../../@types/shared';

export default function Nav(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <Link to={Routes.IndexPage}>Hot Now</Link>
        </li>

        <li>
          <Link to={Routes.Pizzas}>Pizza Menu</Link>
        </li>

        <li>
          <Link to={Routes.IndexPage}>LOGO</Link>
        </li>

        <li>
          <Link to={Routes.SliceMasters}>SliceMasters</Link>
        </li>

        <li>
          <Link to={Routes.Order}>Order Ahead</Link>
        </li>
      </ul>
    </nav>
  );
}
