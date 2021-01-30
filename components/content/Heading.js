import styled from "styled-components";

const StyledHeading = styled.h3`
  margin: 1.8rem 0 -0.5rem;
  line-height: 1;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02rem;
  color: #000;
  text-transform: uppercase;
`;

const Highlight = styled.span`
  margin: -0.2rem -0.45rem;
  padding: 0.2rem 0.45rem;
  background-image: paint(brushstroke);
  --brush-color: #ffd969;
`;

const Heading = ({ props, children }) => {
  return (
    <StyledHeading>
      <Highlight>{children}</Highlight>
    </StyledHeading>
  );
};

export default Heading;
