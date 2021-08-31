import { WorkItemImage } from "@prisma/client";
import styled from "styled-components";
import GallaryImage from "./GallaryImage";

const GallaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

interface GallaryProps {
  images: WorkItemImage[];
}

const Gallary: React.FC<GallaryProps> = (props) => {
  return (
    <GallaryContainer>
      {props.images.map((image, key) => (
        <GallaryImage key={key} image={image} />
      ))}
    </GallaryContainer>
  );
};

export default Gallary;
