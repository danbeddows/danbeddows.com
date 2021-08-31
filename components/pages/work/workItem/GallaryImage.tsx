import { faExpandAlt } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WorkItemImage } from "@prisma/client";
import styled from "styled-components";

interface GallaryImageProps {
  key: number;
  image: WorkItemImage;
}

const ImageContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  margin: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  cursor: pointer;
  position: relative;
  background-size: contain;
  width: 200px;
  height: 160px;
`;

const HoverOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 10px #fff;
  font-size: 24px;
  background: rgba(60, 60, 60, 0.5);
  color: #fff;

  &:hover {
    opacity: 1;
  }
`;

const GallaryImage: React.FC<GallaryImageProps> = (props) => {
  const { url, alt } = props.image;

  return (
    <ImageContainer key={props.key} style={{ backgroundImage: `url(${url})` }}>
      <HoverOverlay>
        <FontAwesomeIcon icon={faExpandAlt} />
      </HoverOverlay>
    </ImageContainer>
  );
};

export default GallaryImage;
