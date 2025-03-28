import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledSocialLink = styled.a`
  color: #fff;
  margin-right: 16px;
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 28px;

  @media (max-height: ${(props) => props.theme.bp.smallMobileHeight}) {
    font-size: 22px;
  }
`;
