import { motion } from "framer-motion";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

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

const ContentWrapper = (props) => {
  return (
    <Wrapper variants={motionVariants}>
      <Header
        closeMenu={props.closeMenu}
        isMobile={props.isMobile}
        reduceMotion={props.reduceMotion}
      />

      <Nav
        closeMenu={props.closeMenu}
        isMobile={props.isMobile}
        reduceMotion={props.reduceMotion}
      />

      <Footer reduceMotion={props.reduceMotion} />
    </Wrapper>
  );
};

export default ContentWrapper;
