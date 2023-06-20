import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import styled from "styled-components";
import Item from "./NavItem";

const motionVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navData = [
  { href: "/", title: "Home", description: "Go to the homepage" },
  { href: "/about", title: "About", description: "Why I started programming" },
  { href: "/work", title: "Work", description: "Projects I've worked on" },
  { href: "/contact", title: "Contact", description: "Say hello" },
];

const StyledNav = styled(motion.nav)`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    align-items: flex-start;
  }
`;

interface NavProps {
  reduceMotion: boolean;
  closeMenu: () => void;
  isMobile: boolean;
}

const Nav: FunctionComponent<NavProps> = ({
  reduceMotion,
  closeMenu,
  isMobile,
}) => {
  return (
    <StyledNav
      variants={motionVariants}
      aria-label="Main Menu"
      aria-labelledby="primary-navigation"
      role="navigation"
    >
      {navData.map((navItem, index) => {
        return (
          <Item
            href={navItem.href}
            title={navItem.title}
            description={navItem.description}
            closeMenu={closeMenu}
            isMobile={isMobile}
            key={index}
            reduceMotion={reduceMotion}
          />
        );
      })}
    </StyledNav>
  );
};

export default Nav;
