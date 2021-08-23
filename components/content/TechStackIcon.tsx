import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  i,
  svg {
    font-size: 28px;
    margin: 0 10px;
  }
`;

interface StackProps {
  icon: string;
  title?: string;
  href?: string | null | undefined;
}

const TechStackIcon: FunctionComponent<StackProps> = ({
  icon,
  title = undefined,
  href = undefined,
}) => {
  const faIcon: IconName = icon as IconName;

  return (
    <>
      {href && (
        <StyledLink href={href} target="_blank">
          <FontAwesomeIcon icon={["fab", faIcon]} title={title} />
        </StyledLink>
      )}
      {!href && <FontAwesomeIcon icon={["fab", faIcon]} title={title} />}
    </>
  );
};

export default TechStackIcon;
