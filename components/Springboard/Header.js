import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const closeIfMobile = () => {
  if (props.isMobile) {
    props.closeMenu();
  }
};

const motionVariants = (prefersReducedMotion) =>
  !prefersReducedMotion
    ? {
        open: {
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
        closed: {
          opacity: 0,
          transition: {
            delay: 0.2,
          },
        },
      }
    : {
        open: {
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.2,
          },
        },
        closed: {
          opacity: 0,
          transition: {
            duration: 0.2,
          },
        },
      };

const StyledHeader = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }

  @media screen and (min-width: 769px) {
    flex-direction: column;
    flex: 0 0 220px;
  }
`;

const StyledImageLink = styled.a`
  @media screen and (max-width: 768px) {
    max-width: 80px;
    margin-right: 11px;
  }

  /* hide profile photo when width gets too small */
  @media screen and (max-width: 374px) {
    display: none !important;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
  border-style: solid;
  border-color: #fff;
  border-width: 2px;
  background: #fff;
`;

const Title = styled.div`
  color: #fff;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }

  @media screen and (min-width: 769px) {
    margin-top: 18px;
    font-size: 32px;
  }
`;

const Subtitle = styled.div`
  margin-top: 2px;

  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (min-width: 769px) {
    font-size: 18px;
  }
`;

const Header = (props) => {
  return (
    <StyledHeader variants={motionVariants(props.reduceMotion)}>
      <Link href="/">
        <StyledImageLink onClick={closeIfMobile}>
          <StyledImage src={"/danbeddows.jpg"} width="140" height="140" />
        </StyledImageLink>
      </Link>
      <Link href="/">
        <a onClick={closeIfMobile}>
          <Title>Dan Beddows</Title>
          <Subtitle>Full Stack Web Developer</Subtitle>
        </a>
      </Link>
    </StyledHeader>
  );
};

export default Header;
