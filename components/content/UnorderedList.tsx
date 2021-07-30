import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  margin: 1.4rem 0;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.7;

  @media screen and (min-width: 769px) {
    max-width: 700px;
  }
`;

interface UlProps {}

const UnorderedList: FunctionComponent<UlProps> = ({ children }) => {
  return <StyledUl>{children}</StyledUl>;
};

export default UnorderedList;
