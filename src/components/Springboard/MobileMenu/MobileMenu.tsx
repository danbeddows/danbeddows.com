import Lottie from "react-lottie";
import { burgerLottieData } from "./burgerLottieData";
import { Button, ButtonContainer, MenuContainer } from "./MobileMenu.styles";
import { MobileMenuBackground } from "./MobileMenuBackground";

interface MobileButtonProps {
  isReducedMotion: boolean;
  isMobileMenuOpen: boolean;
  toggleMenu: () => void;
}
export const MobileMenu = ({
  isReducedMotion,
  isMobileMenuOpen,
  toggleMenu
}: MobileButtonProps) => {
  return (
    <MenuContainer>
      <MobileMenuBackground isReducedMotion={isReducedMotion} />
      <ButtonContainer>
        <Button
          aria-label="Toggle Main Menu"
          aria-expanded={isMobileMenuOpen}
          type="button"
          onClick={() => {
            toggleMenu();
          }}
        >
          <Lottie
            options={{ animationData: burgerLottieData, loop: false }}
            isStopped={false}
            direction={isMobileMenuOpen ? 1 : -1}
            speed={2}
          />
        </Button>
      </ButtonContainer>
    </MenuContainer>
  );
};
