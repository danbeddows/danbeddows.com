import { HeaderImage } from "./HeaderImage";
import { HeaderName } from "./HeaderName/HeaderName";
import { HeaderContainer } from "./Header.styles";

/**
 * Define Motion variants to handle transition animation
 */

const normalMotionVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.2
    }
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0.2
    }
  }
};

const reducedMotionVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2
    }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

interface HeaderProps {
  closeMenu: () => void;
  isMobile: boolean;
  isReducedMotion: boolean;
}
export const Header = ({
  closeMenu,
  isMobile,
  isReducedMotion
}: HeaderProps) => {
  const motionVariants = isReducedMotion
    ? reducedMotionVariants
    : normalMotionVariants;

  return (
    <HeaderContainer variants={motionVariants}>
      <HeaderImage closeMenu={closeMenu} isMobile={isMobile} />
      <HeaderName closeMenu={closeMenu} isMobile={isMobile} />
    </HeaderContainer>
  );
};
