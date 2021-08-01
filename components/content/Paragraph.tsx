import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 1.4rem 0;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.7;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    max-width: 700px;
  }
`;

const Paragraph: FunctionComponent = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
