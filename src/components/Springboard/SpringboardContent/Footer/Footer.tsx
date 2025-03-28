import { SocialLink } from "./SocialLink";
import {
  CopyrightContainer,
  FooterContainer,
  FooterSocialContainer
} from "./Footer.styles";
import { socialAccounts } from "./constants";

/**
 * Define Motion variants to handle transition animation
 */
const reducedMotionVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.2 }
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const normalMotionVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.45,
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

/*
 * Footer functional component that will be exported
 */
interface FooterProps {
  isReducedMotion: boolean;
}
export const Footer = ({ isReducedMotion }: FooterProps) => {
  const motionVariants = isReducedMotion
    ? reducedMotionVariants
    : normalMotionVariants;

  return (
    <FooterContainer variants={motionVariants}>
      <FooterSocialContainer>
        {socialAccounts.map((socialAccount) => (
          <SocialLink socialAccount={socialAccount} key={socialAccount.type} />
        ))}
      </FooterSocialContainer>
      <CopyrightContainer>
        &copy; Daniel Beddows {new Date().getFullYear()}
      </CopyrightContainer>
    </FooterContainer>
  );
};
