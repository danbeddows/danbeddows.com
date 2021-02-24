import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import SocialLink from "./Footer/SocialLink";

const motionVariants = (prefersReducedMotion) =>
  !prefersReducedMotion
    ? {
        open: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.45,
            y: { stiffness: 1000, velocity: -100 },
          },
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        },
      }
    : {
        open: {
          y: 0,
          opacity: 1,
          transition: { delay: 0.2, duration: 0.2 },
        },
        closed: {
          y: 0,
          opacity: 0,
          transition: { duration: 0.2 },
        },
      };

const socialData = [
  { href: "https://twitter.com/danbeddows", icon: faTwitter },
  {
    href: "https://www.linkedin.com/in/danbeddows/",
    icon: faLinkedin,
  },
  { href: "https://github.com/danbeddows/", icon: faGithub },
];

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
  font-family: "Montserrat", Roboto, Oxygen, Ubuntu, Droid Sans, Helvetica Neue,
    sans-serif;
  font-weight: 400;
`;

const Footer = (props) => {
  return (
    <Container variants={motionVariants(props.reduceMotion)}>
      <FooterSocials>
        {socialData.map((social, index) => (
          <SocialLink href={social.href} icon={social.icon} key={index} />
        ))}
      </FooterSocials>
      <Copyright>&copy; Daniel Beddows {new Date().getFullYear()}</Copyright>
    </Container>
  );
};

export default Footer;
