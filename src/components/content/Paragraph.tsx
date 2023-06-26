import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 1.2rem 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;

  @media (min-width: 769px) {
    max-width: 700px;
  }
`;

const Paragraph: React.FC = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
