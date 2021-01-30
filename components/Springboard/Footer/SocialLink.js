import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledLink = styled.a`
  color: #fff;
  margin-right: 16px;
`;

const Icon = ({ className, icon }) => (
  <FontAwesomeIcon icon={icon} className={className} />
);

const StyledIcon = styled(Icon)`
  font-size: 28px;

  @media screen and (max-height: 500px) {
    font-size: 22px;
  }
`;

const SocialLink = ({ href, icon }) => {
  return (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      <StyledIcon icon={icon} />
    </StyledLink>
  );
};

export default SocialLink;
