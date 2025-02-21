import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const motionVariants = (prefersReducedMotion: boolean) =>
  !prefersReducedMotion
    ? {
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 },
          },
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        },
      }
    : {
        open: {
          opacity: 1,
          transition: { delay: 0.2, duration: 0.2 },
        },
        closed: {
          opacity: 0,
          transition: { duration: 0.2 },
        },
      };

const StyledLink = styled(motion.a)`
  margin: 1rem 0;
  cursor: pointer;
  text-decoration: none;

  @media (max-height: ${(props) => props.theme.bp.smallMobileHeight}) {
    margin: 0.5rem 0;
  }
`;

const Title = styled.div`
  font-size: 1.375rem;
  font-weight: 600;
  color: #fff;
  text-align: right;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    text-align: left;
  }

  @media (max-height: ${(props) => props.theme.bp.smallMobileHeight}) {
    font-size: 18px;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
  text-align: right;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    text-align: left;
  }

  @media (max-height: ${(props) => props.theme.bp.smallMobileHeight}) {
    font-size: 14px;
  }
`;

interface ItemProps {
  href: string;
  title: string;
  description: string;
  isMobile: boolean;
  reduceMotion: boolean;
  closeMenu: () => void;
}

const Item: React.FC<ItemProps> = ({
  isMobile,
  closeMenu,
  href,
  title,
  description,
  reduceMotion,
}) => {
  const closeIfMobile = () => {
    if (isMobile) {
      closeMenu();
    }
  };

  return (
    <Link href={href} passHref legacyBehavior>
      <StyledLink
        onClick={closeIfMobile}
        variants={motionVariants(reduceMotion)}
        aria-label={title}
      >
        <Title>{title}</Title>
        <Label>{description}</Label>
      </StyledLink>
    </Link>
  );
};

export default Item;
