import { motion } from "framer-motion";
import styled from "styled-components";
import Item from "./Nav/Item";

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
  { href: "/about", title: "About", description: "What I do and why" },
  { href: "/contact", title: "Contact", description: "Say hello" },
];

const StyledNav = styled(motion.nav)`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    align-items: flex-end;
  }

  @media screen and (min-width: 769px) {
    align-items: flex-start;
  }
`;

const Nav = (props) => {
  return (
    <StyledNav variants={motionVariants} aria-label="Main Menu">
      {navData.map((navItem, index) => {
        return (
          <Item
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
    </StyledNav>
  );
};

export default Nav;
