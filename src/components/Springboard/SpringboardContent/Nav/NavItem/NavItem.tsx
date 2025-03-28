import Link from "next/link";
import { NavLabel, NavLink, NavTitle } from "./NavItem.styles";

/**
 * Define Motion variants to handle transition animation
 */
const reducedMotionVariants = {
  open: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.2 }
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const normalMotionVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface NavItemProps {
  href: string;
  title: string;
  description: string;
  isMobile: boolean;
  isReducedMotion: boolean;
  closeMenu: () => void;
}
export const NavItem = ({
  isMobile,
  closeMenu,
  href,
  title,
  description,
  isReducedMotion
}: NavItemProps) => {
  const closeMenuIfMobile = () => {
    if (isMobile) {
      closeMenu();
    }
  };

  const motionVariants = isReducedMotion
    ? reducedMotionVariants
    : normalMotionVariants;

  return (
    <Link href={href} passHref legacyBehavior>
      <NavLink
        onClick={closeMenuIfMobile}
        variants={motionVariants}
        aria-label={title}
      >
        <NavTitle>{title}</NavTitle>
        <NavLabel>{description}</NavLabel>
      </NavLink>
    </Link>
  );
};
