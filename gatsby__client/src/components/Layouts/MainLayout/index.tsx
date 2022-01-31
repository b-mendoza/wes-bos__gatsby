import Footer from '../../Footer';
import Nav from '../../Nav';

import { StyledContent, StyledSiteBorder } from './styled';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <StyledSiteBorder>
      <StyledContent>
        <Nav />

        <main>{children}</main>

        <Footer />
      </StyledContent>
    </StyledSiteBorder>
  );
}
