import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import Image from "./Image";

/**
 * Create components with styled-components
 */
const StyledLink = styled.a`
  @media screen and (max-width: 768px) {
    max-width: 80px;
    margin-right: 11px;
  }

  /* hide profile photo when width gets too small */
  @media screen and (max-width: 374px) {
    display: none !important;
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
    <Link href="/" passHref>
      <StyledLink onClick={closeIfMobile}>
        <Image />
      </StyledLink>
    </Link>
  );
};

export default HeaderImage;
