import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import profilePhoto from "../../../../../../public/danbeddows.jpg";

const ImageContainer = styled.div`
  max-width: 146px;
  max-height: 146px;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
  border: 2px var(--light-blue) solid !important;
  background: #fff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

const HeaderImage: FC = () => {
  return (
    <ImageContainer>
      <StyledImage
        src={profilePhoto}  
        width={292}
        height={292}
        quality={100}
        alt="Profile photo of Dan"
      />
    </ImageContainer>
  );
};

export default HeaderImage;
