import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  flex-direction: row;
  width: 100%;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    flex-direction: column;
    flex: 0 0 220px;
  }
`;
