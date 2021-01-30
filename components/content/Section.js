import styled from "styled-components";

const StyledSection = styled.section`
  margin: 3.5rem 0 0.5rem;
`;

const Section = ({ props, children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
