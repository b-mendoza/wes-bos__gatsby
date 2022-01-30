import Footer from '../../Footer';
import Nav from '../../Nav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <>
      <Nav />

      <main>{children}</main>

      <Footer />
    </>
  );
}
