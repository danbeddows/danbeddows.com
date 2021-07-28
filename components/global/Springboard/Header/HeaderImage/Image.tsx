import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 50%;
  overflow: hidden;

  background: #fff;

  @media screen and (max-width: 768px) {
    border: 2px #6d90ab solid !important;
  }

  @media screen and (min-width: 769px) {
    border: 2px #6d90ab solid !important;
  }
`;

const HeaderImage: FC = () => {
  return <StyledImage src={"/danbeddows.jpg"} width="146" height="146" />;
};

export default HeaderImage;
