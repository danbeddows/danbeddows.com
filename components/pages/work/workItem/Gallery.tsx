import { WorkItemImage } from "@prisma/client";
import styled from "styled-components";
import GalleryImage from "./GalleryItem";

const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

interface GalleryProps {
  images: WorkItemImage[];
}

const Gallery: React.FC<GalleryProps> = (props) => {
  return (
    <GalleryContainer>
      {props.images.map((image, key) => (
        <GalleryImage key={key} image={image} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
