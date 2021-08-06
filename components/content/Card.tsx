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
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    max-width: 700px;
    flex-direction: row;
    padding: 18px;
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
  a,
  ul,
  li {
    font-size: 0.9375rem;
  }

  button {
    margin-top: 50px;
  }
`;

const IconArea = styled.div`
  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: 13px 30px 0 13px;
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
        <IconArea>
          <FontAwesomeIcon
            icon={icon}
            style={{
              fontSize: 28,
              color: "var(--dark-blue)",
            }}
          />
        </IconArea>
      )}
      <div>
        {title != null && <CardTitle>{title}</CardTitle>}
        <CardContent>{children}</CardContent>
      </div>
    </StyledCard>
  );
};

export default Card;
