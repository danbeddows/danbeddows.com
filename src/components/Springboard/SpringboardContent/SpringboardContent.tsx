import { Header } from "./Header";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ContentWrapper } from "./SpringboardContent.styles";

const motionVariants = {
  open: { display: "flex" },
  closed: {
    transition: { delay: 1 },
    display: "none"
  }
};

interface SpringboardContentProps {
  closeMenu: () => void;
  isMobile: boolean;
  isReducedMotion: boolean;
}
export const SpringboardContent = ({
  closeMenu,
  isMobile,
  isReducedMotion
}: SpringboardContentProps) => {
  return (
    <ContentWrapper variants={motionVariants}>
      <Header
        closeMenu={closeMenu}
        isMobile={isMobile}
        isReducedMotion={isReducedMotion}
      />

      <Nav
        closeMenu={closeMenu}
        isMobile={isMobile}
        isReducedMotion={isReducedMotion}
      />

      <Footer isReducedMotion={isReducedMotion} />
    </ContentWrapper>
  );
};
