import styled from "styled-components";

const StyledSection = styled.section`
  margin: 2rem 0 0.5rem;

  @media (min-width: 769px) {
    margin: 3.5rem 0 0.5rem;
  }
`;

const Section: React.FC = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
