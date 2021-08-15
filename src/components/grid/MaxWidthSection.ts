import styled from "styled-components";

interface FullWidthSectionProps {
  gapDefault?: string;
  marginDefault?: string | number;
  gapMedium?: string;
  marginMedium?: string | number;
  gapSmall?: string;
  marginSmall?: string | number;
}

const MaxWidthSection = styled.section<FullWidthSectionProps>`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, var(--column-width)));
  gap: ${(props) => (props.gapDefault ? props.gapDefault : "0 2rem")};
  margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    gap: ${(props) => (props.gapMedium ? props.gapMedium : "0 1rem")};
    margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
  }

  @media ${(props) => props.theme.breakpoints.s} {
    gap: ${(props) => (props.gapSmall ? props.gapSmall : "0 1rem")};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }
`;

export default MaxWidthSection;
