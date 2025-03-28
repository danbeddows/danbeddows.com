import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled(motion.footer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;

  @media (max-height: ${(props) => props.theme.bp.smallMobileHeight}) {
    margin-top: 1rem;
  }
`;

export const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;
`;

export const CopyrightContainer = styled.div`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;
