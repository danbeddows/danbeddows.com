import { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h1`
  line-height: 1;
  font-weight: 700;
  color: #232d52;
  position: relative;
  z-index: -1;
  background: var(--light-blue);
  border-bottom: 4px solid #ff5757;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    padding: 2rem calc(2rem + 70px) 2rem 2rem;
    margin: -2rem -2rem 0rem;
  }

  @media screen and (min-width: 769px) {
    font-size: 3rem;
    padding: 32px 4rem;
    margin: -4rem -4rem 0.8rem -4rem;
  }
`;

const PageTitle: FunctionComponent = ({ children }) => {
  return <Title>{children}</Title>;
};

export default PageTitle;
