import { FC } from "react";
import {
  HeaderNameLink,
  HeaderSubtitle,
  HeaderTitle
} from "./HeaderName.styles";

/**
 * Header Name functional component that will be exported
 */
interface NameProps {
  closeMenu: () => void;
  isMobile: boolean;
}

export const HeaderName: FC<NameProps> = ({ closeMenu, isMobile }) => {
  const closeIfMobile = () => {
    if (isMobile) {
      closeMenu();
    }
  };

  return (
    <HeaderNameLink href={"/"} onClick={closeIfMobile} passHref>
      <HeaderTitle>Dan Beddows</HeaderTitle>
      <HeaderSubtitle>Senior Web Engineer</HeaderSubtitle>
    </HeaderNameLink>
  );
};
