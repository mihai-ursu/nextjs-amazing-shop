import styled from "styled-components";

interface GridProps {
  gapDefault?: string | number;
  marginDefault?: string | number;
  gapMedium?: string | number;
  marginMedium?: string | number;
  gapSmall?: string | number;
  marginSmall?: string | number;
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, var(--column-width))) 1fr;
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
  gap: ${(props) => (props.gapDefault ? props.gapDefault : "0 2rem")};
  margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

  @media ${(props) => props.theme.breakpoints.m} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${(props) => (props.gapMedium ? props.gapMedium : "0 1rem")};
    margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
  }

  @media ${(props) => props.theme.breakpoints.s} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: ${(props) => (props.gapSmall ? props.gapSmall : "0 1rem")};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }
`;

export default Grid;
