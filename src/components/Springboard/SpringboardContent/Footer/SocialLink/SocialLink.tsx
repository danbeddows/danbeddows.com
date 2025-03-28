import { SocialAccount } from "./types";
import { SocialIcon, StyledSocialLink } from "./SocialLink.styles";

/**
 * SocialLink functional component that will be exported
 */
interface SocialLinkProps {
  socialAccount: SocialAccount;
}
export const SocialLink = ({ socialAccount }: SocialLinkProps) => {
  return (
    <StyledSocialLink
      href={socialAccount.href}
      target="_blank"
      aria-label={"Link to my " + socialAccount.type + " account"}
    >
      <SocialIcon icon={socialAccount.icon} />
    </StyledSocialLink>
  );
};
