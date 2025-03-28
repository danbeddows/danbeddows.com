import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

/**
 * Create components with styled-components
 */
const StyledBodyLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.div`
  color: #fff;
  font-weight: 700;
  text-align: center;
  font-size: 23px;
  

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin-top: 18px;
    font-size: 32px;
  }
`;

const Subtitle = styled.div`
  color: #fff;
  font-weight: 400;
  text-align: left;
  font-size: 15.5px;
  margin-left: 3px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    font-size: 19px;
    text-align: left;
    margin-left: 1px;
  }
`;

/**
 * Header Name functional component that will be exported
 */
interface NameProps {
  closeMenu: () => void;
  isMobile: boolean;
}

const HeaderName: FC<NameProps> = ({ closeMenu, isMobile }) => {
  const closeIfMobile = () => {
    if (isMobile) {
      closeMenu();
    }
  };

  return (
    <StyledBodyLink href={"/"} onClick={closeIfMobile} passHref>
      <Title>Dan Beddows</Title>
      <Subtitle>Senior Web Engineer</Subtitle>
    </StyledBodyLink>
  );
};

export default HeaderName;
