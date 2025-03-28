import Link from "next/link";
import styled from "styled-components";

export const HeaderNameLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderTitle = styled.div`
  color: #fff;
  font-weight: 700;
  text-align: center;
  font-size: 23px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin-top: 18px;
    font-size: 32px;
  }
`;

export const HeaderSubtitle = styled.div`
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
