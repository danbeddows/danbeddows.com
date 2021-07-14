import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 1.4rem 0;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.7;

  @media screen and (min-width: 769px) {
    max-width: 700px;
  }
`;

const Paragraph: FunctionComponent = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
