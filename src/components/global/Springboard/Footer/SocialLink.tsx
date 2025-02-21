import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

/**
 * Create components with styled-components
 */
const StyledLink = styled.a`
  color: #fff;
  margin-right: 16px;
`;

/**
 * Define the 'Icon' functional component (and it's interface), and then extend the component with
 * styled-components to add a font-size property based on display resolution to a new StyledIcon component
 */
interface IconProps {
  className?: string;
  icon: IconProp;
}

const Icon = ({ className, icon }: IconProps) => (
  <FontAwesomeIcon icon={icon} className={className} />
);

const StyledIcon = styled(Icon)`
  font-size: 28px;

  @media (max-height: ${(props) => props.theme.bp.smallMobileHeight}) {
    font-size: 22px;
  }
`;

/**
 * SocialLink functional component that will be exported
 */
interface SocialLinkProps {
  href: string;
  icon: IconProp;
  type: string;
}

const SocialLink = ({ href, icon, type }: SocialLinkProps) => {
  return (
    <StyledLink
      href={href}
      target="_blank"
      aria-label={"Link to my " + type + " account"}
    >
      <StyledIcon icon={icon} />
    </StyledLink>
  );
};

export default SocialLink;
