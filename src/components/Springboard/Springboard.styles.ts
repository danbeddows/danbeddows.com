import { motion } from "framer-motion";
import styled from "styled-components";

export const SpringboardContainer = styled(motion.aside)`
  width: 100%;
  height: 100%;
  min-height: 0;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    pointer-events: auto;
    min-height: 100vh;
  }
`;
