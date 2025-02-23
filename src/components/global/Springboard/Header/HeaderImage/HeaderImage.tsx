import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import Image from "./Image";

/**
 * Create components with styled-components
 */
const StyledLink = styled(Link)`
  max-width: 80px;
  margin-right: 11px;

  /* hide profile photo when width gets too small */
  @media (max-width: ${(props) => props.theme.bp.mobile}) {
    display: none !important;
  }

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    max-width: none;
    margin-right: 0;
  }
`;

/**
 * Header Image functional component that will be exported
 */
interface ImageProps {
  closeMenu: () => void;
  isMobile: boolean;
}

const HeaderImage: FC<ImageProps> = ({ closeMenu, isMobile }) => {
  const closeIfMobile = () => {
    if (isMobile) {
      closeMenu();
    }
  };

  return (
    <StyledLink href="/" passHref onClick={closeIfMobile}>
      <Image />
    </StyledLink>
  );
};

export default HeaderImage;
