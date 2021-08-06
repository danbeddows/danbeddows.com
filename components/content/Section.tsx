import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  margin: 2rem 0 0.5rem;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: 3.5rem 0 0.5rem;
  }
`;

const Section: FunctionComponent = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
