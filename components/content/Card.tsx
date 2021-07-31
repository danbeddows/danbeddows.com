import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 1.4rem 0;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.7;
  border: 1px solid #6d90ab;
  background: #cedae3;
  border-radius: 4px;
  padding: 18px;

  @media screen and (min-width: 769px) {
    max-width: 700px;
  }
`;

interface CardProps {
  icon?: IconProp;
  title?: string;
}

const Card: FunctionComponent<CardProps> = ({ children, icon, title }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
