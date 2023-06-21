import { Lottie } from "@crello/react-lottie";
import styled from "styled-components";
import Background from "./BurgerBackground";
import burgerData from "./BurgerLottieJson";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: none !important;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 17px;
  right: 17px;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  padding: 20px;
  pointer-events: auto;
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

interface MobileButtonProps {
  reduceMotion: boolean;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileButton: React.FC<MobileButtonProps> = ({
  reduceMotion,
  menuOpen,
  toggleMenu,
}) => {
  return (
    <Container>
      <Background reduceMotion={reduceMotion} />
      <ButtonContainer>
        <Button
          aria-label="Toggle Main Menu"
          aria-expanded={menuOpen}
          type="button"
          onClick={() => {
            toggleMenu();
          }}
        >
          <Lottie
            config={{ animationData: burgerData }}
            playingState={"playing"}
            direction={menuOpen ? 1 : -1}
            speed={2}
          />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default MobileButton;
