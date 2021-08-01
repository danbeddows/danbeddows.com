import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledHeading = styled.h3`
  margin: 1.8rem 0 -0.5rem;
  line-height: 1;
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark-blue);
  text-transform: uppercase;
`;

const Heading: FunctionComponent = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
