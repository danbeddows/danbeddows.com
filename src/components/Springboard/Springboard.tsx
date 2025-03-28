import { useReducedMotion } from "framer-motion";
import React, { useState } from "react";
import useWindowDimensions from "src/util/hooks/useWindowDimensions";
import MobileButton from "./MobileBurger/MobileBurger";
import { SpringboardContainer } from "./Springboard.styles";
import { SpringboardContent } from "./SpringboardContent";

export const Springboard = () => {
  const [isDisplayMobile, setIsDisplayMobile] = useState(true);
  const isReducedMotion = useReducedMotion() ?? false;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let windowDimensions = useWindowDimensions();

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  /**
   * Track changes to the window dimensions and update the state that tracks
   * whether the user is on mobile or not
   *
   * the sidebar interactions behave differently for mobile vs desktop, so we know behaviour to
   * show based on the window dimensions
   */
  if (windowDimensions) {
    const mobileBreakpoint = 768;
    const isMobile = windowDimensions.width <= mobileBreakpoint;

    // Only update state if the state has changed
    if (isMobile !== isDisplayMobile) {
      setIsDisplayMobile(isMobile);
      setIsMenuOpen(!isMobile);
    }
  }

  return (
    <SpringboardContainer
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
    >
      <MobileButton
        toggleMenu={toggleMenu}
        menuOpen={isMenuOpen}
        reduceMotion={isReducedMotion}
      />
      <SpringboardContent
        closeMenu={closeMobileMenu}
        isMobile={isDisplayMobile}
        isReducedMotion={isReducedMotion}
      />
    </SpringboardContainer>
  );
};
