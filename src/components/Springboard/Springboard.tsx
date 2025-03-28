import { motion, useReducedMotion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "src/util/hooks/useWindowDimensions";
import MobileButton from "./MobileBurger/MobileBurger";
import ContentWrapper from "./SpringboardInner";

const Container = styled(motion.aside)`
  width: 100%;
  height: 100%;
  min-height: 0;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    pointer-events: auto;
    min-height: 100vh;
  }
`;

const Springboard = () => {
  const [isDisplayMobile, setIsDisplayMobile] = useState(true);
  const shouldReduceMotion = useReducedMotion() as boolean;

  const [menuOpen, setMenuOpen] = useState(false);

  let windowDimensions = useWindowDimensions();

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  /**
   * Track changes to the window dimensions and update the state that tracks
   * whether the user is on mobile or larger
   *
   * the sidebar interactions behave differently for mobile vs desktop, so we must track
   * window size changes
   */
  if (windowDimensions) {
    const mobileBreakpoint = 768;
    const isMobile = windowDimensions.width <= mobileBreakpoint;

    // Only update state if the new state value has changed
    if (isMobile != isDisplayMobile) {
      setIsDisplayMobile(isMobile);
      setMenuOpen(!isMobile);
    }
  }

  return (
    <Container initial={false} animate={menuOpen ? "open" : "closed"}>
      <MobileButton
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        reduceMotion={shouldReduceMotion}
      />
      <ContentWrapper
        closeMenu={closeMobileMenu}
        isMobile={isDisplayMobile}
        reduceMotion={shouldReduceMotion}
      />
    </Container>
  );
};

export default Springboard;
