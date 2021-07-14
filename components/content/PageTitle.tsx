import { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: -4rem;
  margin-bottom: 0.8rem;
  line-height: 1;
  font-weight: 700;
  color: #232d52;
  position: relative;
  z-index: -1;
  background: #6d90ab;
  padding: 32px 4rem;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    width: 100%;
    height: 4px;
    background: #ff5757;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    padding: 2rem;
    margin: -2rem;
  }

  @media screen and (min-width: 769px) {
    font-size: 3rem;
  }
`;

const PageTitle: FunctionComponent = ({ children }) => {
  return <Title>{children}</Title>;
};

export default PageTitle;
