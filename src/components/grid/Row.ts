import styled from "styled-components";

interface RowProps {
  sd?: string;
  ed?: string;
  sm?: string;
  em?: string;
  ss?: string;
  es?: string;
}

const Row = styled.div<RowProps>`
  grid-column-start: ${(props) => (props.sd ? props.sd : "1")};
  grid-column-end: span ${(props) => (props.ed ? props.ed : "12")};

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column-start: ${(props) => (props.sm ? props.sm : "1")};
    grid-column-end: span ${(props) => (props.em ? props.em : "6")};
  }

  @media ${(props) => props.theme.breakpoints.s} {
    grid-column-start: ${(props) => (props.ss ? props.ss : "1")};
    grid-column-end: span ${(props) => (props.es ? props.es : "6")};
  }
`;

export default Row;
