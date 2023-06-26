import { motion } from "framer-motion";
import styled from "styled-components";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";

const motionVariants = {
  open: { display: "flex" },
  closed: {
    transition: { delay: 1 },
    display: "none",
  },
};

const Inner = styled(motion.div)`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  min-height: 100%;
  z-index: 1000;
  pointer-events: auto;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    padding: 2rem 2rem;
    min-height: 100vh;
  }
`;

interface SpringboardInnerProps {
  closeMenu: () => void;
  isMobile: boolean;
  reduceMotion: boolean;
}

const SpringboardInner: React.FC<SpringboardInnerProps> = ({
  closeMenu,
  isMobile,
  reduceMotion,
}) => {
  return (
    <Inner variants={motionVariants}>
      <Header
        closeMenu={closeMenu}
        isMobile={isMobile}
        reduceMotion={reduceMotion}
      />

      <Nav
        closeMenu={closeMenu}
        isMobile={isMobile}
        reduceMotion={reduceMotion}
      />

      <Footer reduceMotion={reduceMotion} />
    </Inner>
  );
};

export default SpringboardInner;
