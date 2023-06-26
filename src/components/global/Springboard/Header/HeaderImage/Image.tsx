import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  max-width: 146px;
  max-height: 146px;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
  border: 2px var(--light-blue) solid !important;
  background: #fff;
`;

const HeaderImage: FC = () => {
  return (
    <ImageContainer>
      <StyledImage
        src={"/danbeddows.jpg"}
        width="292"
        height="292"
        quality={100}
      />
    </ImageContainer>
  );
};

export default HeaderImage;
