import { motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import HeaderImage from "./HeaderImage/HeaderImage";
import HeaderName from "./HeaderName/HeaderName";

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
 * Header functional component that will be exported
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

interface HeaderProps {
  closeMenu: () => void;
  isMobile: boolean;
  reduceMotion: boolean;
}

const Header: FC<HeaderProps> = ({ closeMenu, isMobile, reduceMotion }) => {
  return (
    <StyledHeader variants={getMotionVariants(reduceMotion)}>
      <HeaderImage closeMenu={closeMenu} isMobile={isMobile} />
      <HeaderName closeMenu={closeMenu} isMobile={isMobile} />
    </StyledHeader>
  );
};

export default Header;
