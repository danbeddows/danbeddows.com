import { motion } from "framer-motion";
import styled from "styled-components";

export const NavContainer = styled(motion.nav)`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    align-items: flex-start;
  }
`;
