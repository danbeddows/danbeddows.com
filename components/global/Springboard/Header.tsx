import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";

/**
 * Define Motion variants to handle transition animation
 */
const motionVariantsOpen = {
  opacity: 1,
  transition: {
    delay: 0.2,
  },
};
const motionVariantsClosed = {
  opacity: 0,
  transition: {
    delay: 0.2,
  },
};
const reducedMotionVariantsOpen = {
  opacity: 1,
  transition: {
    delay: 0.2,
    duration: 0.2,
  },
};
const reducedMotionVariantsClosed = {
  opacity: 0,
  transition: {
    duration: 0.2,
  },
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
 * Create components with styled-components
 */
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
  cursor: pointer;

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

  background: #fff;

  @media screen and (max-width: 768px) {
    border: 2px #6d90ab solid !important;
  }

  @media screen and (min-width: 769px) {
    border: 4px #6d90ab solid !important;
  }
`;

const StyledBodyLink = styled.a`
  text-decoration: none;
`;

const Title = styled.div`
  color: #fff;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }

  @media screen and (min-width: 769px) {
    margin-top: 18px;
    font-size: 32px;
  }
`;

const Subtitle = styled.div`
  color: #fff;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 15.5px;
  }

  @media screen and (min-width: 769px) {
    font-size: 21.4px;
    margin-top: -2px;
  }
`;

/**
 * Header functional component that will be exported
 */
interface HeaderProps {
  closeMenu: () => void;
  isMobile: boolean;
  reduceMotion: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({
  closeMenu,
  isMobile,
  reduceMotion,
}) => {
  const closeIfMobile = () => {
    if (isMobile) {
      closeMenu();
    }
  };

  return (
    <StyledHeader variants={getMotionVariants(reduceMotion)}>
      <Link href="/">
        <StyledImageLink onClick={closeIfMobile}>
          <StyledImage src={"/danbeddows.jpg"} width="146" height="146" />
        </StyledImageLink>
      </Link>
      <Link href="/">
        <StyledBodyLink onClick={closeIfMobile}>
          <Title>Dan Beddows</Title>
          <Subtitle>Full Stack Developer</Subtitle>
        </StyledBodyLink>
      </Link>
    </StyledHeader>
  );
};

export default Header;
