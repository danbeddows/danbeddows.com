import { motion } from "framer-motion";
import styled from "styled-components";

export const NavLink = styled(motion.a)`
  margin: 1rem 0;
  cursor: pointer;
  text-decoration: none;

  @media (max-height: ${(props) => props.theme.bp.smallMobileHeight}) {
    margin: 0.5rem 0;
  }
`;

export const NavTitle = styled.div`
  font-size: 1.375rem;
  font-weight: 600;
  color: #fff;
  text-align: right;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    text-align: left;
  }

  @media (max-height: ${(props) => props.theme.bp.smallMobileHeight}) {
    font-size: 18px;
  }
`;

export const NavLabel = styled.div`
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
  text-align: right;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    text-align: left;
  }

  @media (max-height: ${(props) => props.theme.bp.smallMobileHeight}) {
    font-size: 14px;
  }
`;
