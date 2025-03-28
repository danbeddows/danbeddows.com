import {
  HeaderImageLink,
  ImageWrapper,
  ProfilePhoto
} from "./HeaderImage.styles";
import profilePhoto from "../../../../../../public/danbeddows.jpg";

interface HeaderImageProps {
  closeMenu: () => void;
  isMobile: boolean;
}
export const HeaderImage = ({ closeMenu, isMobile }: HeaderImageProps) => {
  const closeMenuIfMobile = () => {
    if (isMobile) {
      closeMenu();
    }
  };

  return (
    <HeaderImageLink href="/" passHref onClick={closeMenuIfMobile}>
      <ImageWrapper>
        <ProfilePhoto
          src={profilePhoto}
          width={292}
          height={292}
          quality={100}
          alt="Profile photo of Dan"
        />
      </ImageWrapper>
    </HeaderImageLink>
  );
};
