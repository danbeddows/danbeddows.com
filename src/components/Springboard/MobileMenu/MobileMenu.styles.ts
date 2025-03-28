import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: none !important;
  }
`;

export const ButtonContainer = styled.div`
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

export const Button = styled.button`
  background: transparent;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;
