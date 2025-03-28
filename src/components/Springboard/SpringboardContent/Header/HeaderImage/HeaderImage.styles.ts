import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeaderImageLink = styled(Link)`
  max-width: 80px;
  margin-right: 11px;

  /* hide profile photo when width gets too small */
  @media (max-width: ${(props) => props.theme.bp.mobile}) {
    display: none !important;
  }

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    max-width: none;
    margin-right: 0;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 146px;
  max-height: 146px;
`;

export const ProfilePhoto = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
  border: 2px var(--light-blue) solid !important;
  background: #fff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;
