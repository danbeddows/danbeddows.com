import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 2rem 0;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.7;
  border: 1px solid var(--light-blue);
  background: #cedae3;
  border-radius: 4px;
  padding: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    max-width: 700px;
  }
`;

const CardTitle = styled.h5`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dark-blue);
  margin: 13px 0 0px;
`;

const CardContent = styled.div`
  p,
  a {
    font-size: 0.9375rem;
  }

  button {
    margin-top: 50px;
  }
`;

interface CardProps {
  icon?: IconProp;
  title?: string;
}

const Card: FunctionComponent<CardProps> = ({
  children,
  icon = null,
  title = null,
}) => {
  return (
    <StyledCard>
      {icon != null && (
        <FontAwesomeIcon
          icon={icon}
          style={{
            fontSize: 28,
            marginRight: 30,
            color: "var(--dark-blue)",
            marginLeft: 13,
            marginTop: 13,
          }}
        />
      )}
      <div>
        {title != null && <CardTitle>{title}</CardTitle>}
        <CardContent>{children}</CardContent>
      </div>
    </StyledCard>
  );
};

export default Card;
