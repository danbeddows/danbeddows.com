import { motion } from "framer-motion";
import styled from "styled-components";

const height = 1000;

/**
 * Define Motion variants to handle transition animation
 */
const motionVariantsOpen = {
  clipPath: `circle(${height * 2 + 200}px at calc(100% - 53px) 53px)`,
  pointerEvents: "none",
  transition: {
    type: "spring",
    stiffness: 20,
    restDelta: 2,
  },
};
const motionVariantsClosed = {
  clipPath: "circle(30px at calc(100% - 53px) 53px)",
  pointerEvents: "auto",
  transition: {
    delay: 0.3,
    type: "spring",
    stiffness: 400,
    damping: 40,
  },
};
const reducedMotionVariantsOpen = {
  clipPath: `circle(${height * 2 + 200}px at calc(100% - 53px) 53px)`,
  pointerEvents: "none",
  opacity: 1,
  transition: {
    duration: 0.3,
  },
};
const reducedMotionVariantsClosed = {
  clipPath: `circle(${height * 2 + 200}px at calc(100% - 53px) 53px)`,
  pointerEvents: "auto",
  opacity: 0,
  transition: {
    delay: 0.2,
    duration: 0.3,
  },
};

const getMotionVariants = (prefersReducedMotion: boolean) =>
  prefersReducedMotion
    ? {
        open: reducedMotionVariantsOpen,
        closed: reducedMotionVariantsClosed,
      }
    : {
        open: motionVariantsOpen,
        closed: motionVariantsClosed,
      };

interface StyledBackgroundProps {
  variants: any;
}

const StyledBackground = styled(motion.div)<StyledBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--dark-blue);
  z-index: 999;
  pointer-events: none;
`;

/**
 * 'Background' functional component that will be exported
 */
interface BackgroundProps {
  reduceMotion: boolean;
}

const Background = ({ reduceMotion }: BackgroundProps) => {
  return <StyledBackground variants={getMotionVariants(reduceMotion)} />;
};

export default Background;
