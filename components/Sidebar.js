import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "../util/hooks/useWindowDimensions.js";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
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
      <Header
        closeMenu={closeMobileMenu}
        isMobile={isDisplayMobile}
        reduceMotion={shouldReduceMotion}
      />
    </motion.div>
  );
};

const MobileButton = (props) => {
  const buttonVariantsMotion = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 65px) 65px)`,
      pointerEvents: "none",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(36px at calc(100% - 65px) 65px)",
      pointerEvents: "auto",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const buttonVariantsNoMotion = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 65px) 65px)`,
      pointerEvents: "none",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    }),
    closed: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 65px) 65px)`,
      pointerEvents: "auto",
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
      },
    }),
  };

  return (
    <div className={styles.mobileButtonContainer}>
      <motion.div
        variants={
          !props.reduceMotion ? buttonVariantsMotion : buttonVariantsNoMotion
        }
        className={styles.mobileButtonBg}
      ></motion.div>
      <div className={styles.mobileButton}>
        <button
          aria-label="Main Menu Button"
          className={
            styles.hamburger +
            " " +
            styles.hamburgerElastic +
            " " +
            (props.menuOpen ? styles.isActive : "")
          }
          type="button"
          onClick={() => {
            props.toggleMenu();
          }}
        >
          <span className={styles.hamburgerBox}>
            <span className={styles.hamburgerInner}></span>
          </span>
        </button>
      </div>
    </div>
  );
};

const Header = (props) => {
  let headerVariants = {
    open: { display: "flex" },
    closed: {
      transition: { delay: 1 },
      display: "none",
    },
  };

  const headerIntroVariantsMotion = {
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
  };

  const headerIntroVariantsNoMotion = {
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

  const closeIfMobile = () => {
    if (props.isMobile) {
      props.closeMenu();
    }
  };

  return (
    <motion.header className={styles.header} variants={headerVariants}>
      <motion.div
        className={styles.headerIntro}
        variants={
          !props.reduceMotion
            ? headerIntroVariantsMotion
            : headerIntroVariantsNoMotion
        }
      >
        <Link href="/">
          <a className={styles.imgContainer} onClick={closeIfMobile}>
            <Image
              className={styles.img}
              src={"/danbeddows.jpg"}
              width="140"
              height="140"
            />
          </a>
        </Link>
        <Link href="/">
          <a onClick={closeIfMobile}>
            <div className={styles.title}>Dan Beddows</div>
            <div className={styles.subtitle}>Full Stack Web Developer</div>
          </a>
        </Link>
      </motion.div>

      <Nav
        closeMenu={props.closeMenu}
        isMobile={props.isMobile}
        reduceMotion={props.reduceMotion}
      />

      <Footer reduceMotion={props.reduceMotion} />
    </motion.header>
  );
};

const Nav = (props) => {
  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const navItems = [
    { href: "/", title: "Home", description: "Go to the homepage" },
    { href: "/about", title: "About", description: "What I do and why" },
    { href: "/contact", title: "Contact", description: "Say hello" },
  ];

  return (
    <motion.nav
      className={styles.nav}
      variants={navVariants}
      aria-label="Main Menu"
    >
      {navItems.map((navItem, index) => {
        return (
          <NavItem
            href={navItem.href}
            title={navItem.title}
            description={navItem.description}
            closeMenu={props.closeMenu}
            isMobile={props.isMobile}
            key={index}
            reduceMotion={props.reduceMotion}
          />
        );
      })}
    </motion.nav>
  );
};

const NavItem = (props) => {
  const fadeVariantsMotion = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
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
  };

  const fadeVariantsNoMotion = {
    open: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const closeIfMobile = () => {
    if (props.isMobile) {
      props.closeMenu();
    }
  };

  return (
    <Link href={props.href}>
      <motion.a
        className={styles.navItem}
        onClick={closeIfMobile}
        variants={
          !props.reduceMotion ? fadeVariantsMotion : fadeVariantsNoMotion
        }
      >
        <div className={styles.navItemTitle}>{props.title}</div>
        <div className={styles.navItemDescription}>{props.description}</div>
      </motion.a>
    </Link>
  );
};

const Footer = (props) => {
  const variantsMotion = {
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
  };

  const variantsNoMotion = {
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

  const socials = [
    { href: "https://twitter.com/danbeddows", icon: faTwitter },
    {
      href: "https://www.linkedin.com/in/danbeddows/",
      icon: faLinkedin,
    },
    { href: "https://github.com/danbeddows/", icon: faGithub },
  ];

  return (
    <motion.footer
      className={styles.footer}
      variants={!props.reduceMotion ? variantsMotion : variantsNoMotion}
    >
      <div className={styles.footerSocials}>
        {socials.map((social, index) => (
          <FooterSocial href={social.href} icon={social.icon} key={index} />
        ))}
      </div>
      <div className={styles.copywrite}>&copy; Daniel Beddows 2020</div>
    </motion.footer>
  );
};

const FooterSocial = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

export default Sidebar;
