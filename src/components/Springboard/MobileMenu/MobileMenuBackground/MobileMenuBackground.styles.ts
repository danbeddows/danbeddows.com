import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuBackground = styled(motion.div)<{ variants: any }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--dark-blue);
  z-index: 999;
  pointer-events: none;
`;
