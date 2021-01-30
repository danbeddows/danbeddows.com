import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 1rem 0;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6;
  letter-spacing: 0rem;

  @media screen and (min-width: 769px) {
    max-width: 700px;
  }
`;

const Paragraph = ({ props, children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
