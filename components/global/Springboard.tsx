import { motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "util/hooks/useWindowDimensions";
import ContentWrapper from "./Springboard/ContentWrapper";
import MobileButton from "./Springboard/MobileButton";

const Container = styled(motion.aside)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (max-width: 768px) {
    pointer-events: none;
    min-height: 0;
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
   * useEffect to track changes to the window dimensions and update the state that tracks
   * whether the user is on mobile or larger
   *
   * the sidebar interactions behave differently for mobile vs desktop, so we must track
   * window size changes
   */
  useEffect(() => {
    if (windowDimensions) {
      let mobileBreakpoint = 768;
      let isMobile = windowDimensions.width <= mobileBreakpoint;

      // Only update state if the new state value has changed
      if (isMobile != isDisplayMobile) {
        setIsDisplayMobile(isMobile);
        setMenuOpen(!isMobile);
      }
    }
  }, [windowDimensions]);

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
