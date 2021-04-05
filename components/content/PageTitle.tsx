import { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0 0 0.8rem;
  line-height: 1.15;
  font-weight: 700;
  color: #000;
  font-family: "Montserrat", Roboto, Oxygen, Ubuntu, Droid Sans, Helvetica Neue,
    sans-serif;
  position: relative;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.8rem;
    left: 0;
    width: 100%;
    height: 2px;
    background: #000;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    max-width: 66%;
  }

  @media screen and (min-width: 769px) {
    font-size: 3rem;
  }
`;

const PageTitle: FunctionComponent = ({ children }) => {
  return <Title>{children}</Title>;
};

export default PageTitle;
