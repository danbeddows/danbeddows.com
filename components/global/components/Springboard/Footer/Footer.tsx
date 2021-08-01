import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import styled from "styled-components";
import SocialLink from "./SocialLink";

/**
 * Define Motion variants to handle transition animation
 */
const motionVariantsOpen = {
  opacity: 1,
  y: 0,
  transition: {
    delay: 0.45,
    y: { stiffness: 1000, velocity: -100 },
  },
};
const motionVariantsClosed = {
  y: 50,
  opacity: 0,
  transition: {
    y: { stiffness: 1000 },
  },
};
const reducedMotionVariantsOpen = {
  y: 0,
  opacity: 1,
  transition: { delay: 0.2, duration: 0.2 },
};
const reducedMotionVariantsClosed = {
  y: 0,
  opacity: 0,
  transition: { duration: 0.2 },
};

const getMotionVariants = (prefersReducedMotion: boolean) =>
  prefersReducedMotion
    ? {
        open: reducedMotionVariantsOpen,
        closed: reducedMotionVariantsClosed,
      }
    : {
        open: motionVariantsOpen,
        closed: motionVariantsClosed,
      };

/**
 * Define social links and related FontAwesome icon
 */
const socialData = [
  { href: "https://twitter.com/danbeddows", icon: faTwitter, type: "Twitter" },
  {
    href: "https://www.linkedin.com/in/danbeddows/",
    icon: faLinkedin,
    type: "LinkedIn",
  },
  {
    href: "https://stackoverflow.com/users/1658795/daniel-beddows",
    icon: faStackOverflow,
    type: "Stackoverflow",
  },
  { href: "https://github.com/danbeddows/", icon: faGithub, type: "GitHub" },
];

/**
 * Create components with styled-components
 */
const Container = styled(motion.footer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;

  @media screen and (max-height: 500px) {
    margin-top: 1rem;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;
`;

const Copyright = styled.div`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;

/**
 * Footer functional component that will be exported
 */
interface FooterProps {
  reduceMotion: boolean;
}

const Footer: FunctionComponent<FooterProps> = ({ reduceMotion }) => {
  return (
    <Container variants={getMotionVariants(reduceMotion)}>
      <FooterSocials>
        {socialData.map((social, index) => (
          <SocialLink
            href={social.href}
            icon={social.icon}
            type={social.type}
            key={index}
          />
        ))}
      </FooterSocials>
      <Copyright>&copy; Daniel Beddows {new Date().getFullYear()}</Copyright>
    </Container>
  );
};

export default Footer;
