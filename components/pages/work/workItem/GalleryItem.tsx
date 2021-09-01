import { faExpandAlt, faValueAbsolute } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WorkItemImage } from "@prisma/client";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

interface GalleryImageProps {
  key: number;
  image: WorkItemImage;
}

const imageVariants = (
  prefersReducedMotion: boolean,
  width: number,
  height: number
) =>
  !prefersReducedMotion
    ? {
        normal: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 200,
          height: 160,
        },
        expanded: {
          left: `calc( 50vw - ${width / 2}px )`,
          top: `calc( 50vh - ${height / 2}px )`,
          width,
          height,
          maxWidth: "90vw",
          zIndex: 5000,
        },
      }
    : {
        normal: {
          opacity: 1,
        },
        expanded: {
          width: "calc(100% - 100px)",
          height: "calc(100% - 100px)",
          x: 50,
          y: 50,
          opacity: 1,
        },
      };

const Container = styled(motion.div)`
  width: 200px;
  height: 160px;
  margin: 20px;
`;

const ImageContainer = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;

  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  cursor: pointer;
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
  font-size: 24px;
  background: rgba(60, 60, 60, 0.5);
  color: #fff;

  &:hover {
    opacity: 1;
  }
`;

const GallaryItem: React.FC<GalleryImageProps> = (props) => {
  const { url, alt, width, height } = props.image;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container
      key={props.key}
      initial={false}
      animate={!isExpanded ? "normal" : "expanded"}
    >
      <ImageContainer
        style={{
          backgroundImage: `url(${url})`,
          position: isExpanded ? "fixed" : "relative",
        }}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
        variants={imageVariants(false, width, height)}
        layout
      >
        <HoverOverlay>
          <FontAwesomeIcon icon={faExpandAlt} />
        </HoverOverlay>
      </ImageContainer>
    </Container>
  );
};

export default GallaryItem;
