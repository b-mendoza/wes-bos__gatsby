const currentYear = new Date().getFullYear();

export default function Footer(): JSX.Element {
  return (
    <footer>
      <p>&copy; Slick&apos;s Slices {currentYear}</p>
    </footer>
  );
}
