import { NavItem } from "./NavItem/NavItem";
import { NavContainer } from "./Nav.styles";

const motionVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const navLinks = [
  { href: "/", title: "Home", description: "Go to the homepage" },
  { href: "/about", title: "About", description: "Why I started programming" },
  { href: "/work", title: "Work", description: "Projects I've worked on" },
  { href: "/contact", title: "Contact", description: "Say hello" }
];

interface NavProps {
  closeMenu: () => void;
  isReducedMotion: boolean;
  isMobile: boolean;
}
export const Nav = ({ isReducedMotion, closeMenu, isMobile }: NavProps) => {
  return (
    <NavContainer
      variants={motionVariants}
      aria-label="Main Menu"
      aria-labelledby="primary-navigation"
      role="navigation"
    >
      {navLinks.map((navLink, index) => {
        return (
          <NavItem
            href={navLink.href}
            title={navLink.title}
            description={navLink.description}
            closeMenu={closeMenu}
            isMobile={isMobile}
            key={index}
            isReducedMotion={isReducedMotion}
          />
        );
      })}
    </NavContainer>
  );
};

export default Nav;
