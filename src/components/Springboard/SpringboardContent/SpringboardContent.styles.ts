import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentWrapper = styled(motion.div)`
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
