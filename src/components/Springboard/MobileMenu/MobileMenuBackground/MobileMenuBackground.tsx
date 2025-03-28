import { MenuBackground } from "./MobileMenuBackground.styles";

const height = 1000;

/**
 * Define Motion variants to handle transition animation
 */
const reducedMotionVariants = {
  open: {
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 53px) 53px)`,
    pointerEvents: "none",
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  closed: {
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 53px) 53px)`,
    pointerEvents: "auto",
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.3
    }
  }
};

const normalMotionVariants = {
  open: {
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 53px) 53px)`,
    pointerEvents: "none",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  },
  closed: {
    clipPath: "circle(30px at calc(100% - 53px) 53px)",
    pointerEvents: "auto",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

interface BackgroundProps {
  isReducedMotion: boolean;
}
export const MobileMenuBackground = ({ isReducedMotion }: BackgroundProps) => {
  const motionVariants = isReducedMotion
    ? reducedMotionVariants
    : normalMotionVariants;

  return <MenuBackground variants={motionVariants} />;
};
