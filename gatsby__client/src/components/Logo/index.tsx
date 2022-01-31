import {
  StyledH1,
  StyledSlicks,
  StyledInnerWrapper,
  StyledLogo,
  StyledEst,
  StyledLetter,
  StyledSlices,
} from './styled';

export default function Logo(): JSX.Element {
  return (
    <StyledLogo>
      <StyledInnerWrapper>
        <StyledEst>EST 1994</StyledEst>

        <StyledH1>
          <StyledSlicks>
            <StyledLetter className="S">S</StyledLetter>
            <StyledLetter className="l">l</StyledLetter>
            <StyledLetter className="i">i</StyledLetter>
            <StyledLetter className="c">c</StyledLetter>
            <StyledLetter className="k">k</StyledLetter>
            <StyledLetter className="apos">&apos;</StyledLetter>
            <StyledLetter className="s">s</StyledLetter>
          </StyledSlicks>

          <StyledSlices>slices</StyledSlices>
        </StyledH1>
      </StyledInnerWrapper>
    </StyledLogo>
  );
}
