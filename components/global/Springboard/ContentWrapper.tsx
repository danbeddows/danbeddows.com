import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import styled from "styled-components";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Nav from "./Nav/Nav";

const motionVariants = {
  open: { display: "flex" },
  closed: {
    transition: { delay: 1 },
    display: "none",
  },
};

const Wrapper = styled(motion.div)`
  @media screen and (max-width: 768px) {
    z-index: 1000;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100%;
    pointer-events: auto;
  }

  @media screen and (min-width: 769px) {
    position: sticky;
    top: 0;
    width: 100%;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
  }
`;

interface ContentWrapperProps {
  closeMenu: () => void;
  isMobile: boolean;
  reduceMotion: boolean;
}

const ContentWrapper: FunctionComponent<ContentWrapperProps> = ({
  closeMenu,
  isMobile,
  reduceMotion,
}) => {
  return (
    <Wrapper variants={motionVariants}>
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
    </Wrapper>
  );
};

export default ContentWrapper;
