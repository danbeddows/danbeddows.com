import { motion } from "framer-motion";
import styled from "styled-components";

const motionVariants = (prefersReducedMotion, height = 1000) =>
  !prefersReducedMotion
    ? {
        open: {
          clipPath: `circle(${height * 2 + 200}px at calc(100% - 65px) 65px)`,
          pointerEvents: "none",
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
          },
        },
        closed: {
          clipPath: "circle(36px at calc(100% - 65px) 65px)",
          pointerEvents: "auto",
          transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        },
      }
    : {
        open: {
          clipPath: `circle(${height * 2 + 200}px at calc(100% - 65px) 65px)`,
          pointerEvents: "none",
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
        closed: {
          clipPath: `circle(${height * 2 + 200}px at calc(100% - 65px) 65px)`,
          pointerEvents: "auto",
          opacity: 0,
          transition: {
            delay: 0.2,
            duration: 0.3,
          },
        },
      };

const Container = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 769px) {
    display: none !important;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #293462;
  z-index: 999;
  pointer-events: none;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 29px;
  right: 29px;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  padding: 20px;
  pointer-events: auto;
`;

const MobileButton = (props) => {
  return (
    <Container>
      <Background variants={motionVariants(props.reduceMotion)} />
      <ButtonContainer>
        <button
          aria-label="Toggle Main Menu"
          aria-expanded={props.menuOpen}
          className={
            "hamburger hamburgerElastic " + (props.menuOpen ? "isActive" : "")
          }
          type="button"
          onClick={() => {
            props.toggleMenu();
          }}
        >
          <span className="hamburgerBox">
            <span className="hamburgerInner"></span>
          </span>
        </button>
      </ButtonContainer>
    </Container>
  );
};

export default MobileButton;
