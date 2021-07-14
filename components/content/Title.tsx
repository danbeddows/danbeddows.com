import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  margin: 1.3rem 0;
  line-height: 1;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.03rem;
  color: #ff5757;
`;

const Title: FunctionComponent = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
