import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
  border: 2px var(--light-blue) solid !important;
  background: #fff;
`;

const HeaderImage: FC = () => {
  return <StyledImage src={"/danbeddows.jpg"} width="146" height="146" />;
};

export default HeaderImage;
