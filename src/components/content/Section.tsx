import styled from "styled-components";

const StyledSection = styled.section`
  margin: 2rem 0 0.5rem;

  @media (min-width: 769px) {
    margin: 3.5rem 0 0.5rem;
  }
`;

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
