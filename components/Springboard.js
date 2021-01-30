import { motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "../util/hooks/useWindowDimensions.js";
import styles from "./Sidebar.module.css";
import ContentWrapper from "./Springboard/ContentWrapper";
import MobileButton from "./Springboard/MobileButton";

const Springboard = () => {
  const [isDisplayMobile, setIsDisplayMobile] = useState(true);
  const shouldReduceMotion = useReducedMotion();

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
    <motion.div
      initial={false}
      animate={menuOpen ? "open" : "closed"}
      className={styles.headerContainer}
    >
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
    </motion.div>
  );
};

export default Springboard;
