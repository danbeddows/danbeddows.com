import { IconDefinition, IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  icon: IconDefinition;
  title?: string;
  href?: string;
}

const TechStackIcon = ({
  icon,
  title,
  href,
}: StackProps) => {
  return (
    <>
      {href && (
        <StyledLink href={href} target="_blank" rel={"noreferrer nofollow"}>
          <FontAwesomeIcon icon={icon} title={title} />
        </StyledLink>
      )}
      {!href && <FontAwesomeIcon icon={icon} title={title} />}
    </>
  );
};

export default TechStackIcon;
