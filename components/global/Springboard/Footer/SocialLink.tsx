import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  color: #fff;
  margin-right: 16px;
`;

interface IconProps {
  className?: string;
  icon: IconProp;
}

const Icon: FunctionComponent<IconProps> = ({ className, icon }) => (
  <FontAwesomeIcon icon={icon} className={className} />
);

const StyledIcon = styled(Icon)`
  font-size: 28px;

  @media screen and (max-height: 500px) {
    font-size: 22px;
  }
`;

interface SocialLinkProps {
  href: string;
  icon: IconProp;
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({ href, icon }) => {
  return (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      <StyledIcon icon={icon} />
    </StyledLink>
  );
};

export default SocialLink;
