import styled from "styled-components";
import Springboard from "../global/Springboard/Springboard";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`;

const SpringboardContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 990;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    position: static;
    min-width: 300px;
    pointer-events: auto;
    flex: 0 0 22vw;
    z-index: 1;
    background: var(--dark-blue);
    height: auto;
  }
`;

const ContentContainer = styled.div`
  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    flex: 1;
  }
`;

interface SpringboardLayoutProps {
  children: React.ReactNode;
}

const SpringboardLayout = ({ children }: SpringboardLayoutProps) => {
  return (
    <PageContainer>
      <SpringboardContainer>
        <Springboard />
      </SpringboardContainer>
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default SpringboardLayout;
