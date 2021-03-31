import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "Montserrat", Roboto, Oxygen, Ubuntu, Droid Sans, Helvetica Neue,
    sans-serif;
  margin-bottom: 1.3rem;
  line-height: 1;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.07rem;
  color: #ff5757;
`;

const Title: FunctionComponent = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
