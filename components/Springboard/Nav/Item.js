import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const motionVariants = (prefersReducedMotion) =>
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

  /* very small mobile height */
  @media screen and (max-height: 500px) {
    margin: 0.5rem 0;
  }
`;

const Title = styled.div`
  font-size: 1.375rem;
  font-weight: 600;
  color: #fff;

  /* mobile */
  @media screen and (max-width: 768px) {
    text-align: right;
  }

  /* very small mobile height */
  @media screen and (max-height: 500px) {
    font-size: 18px;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: #fff;

  /* mobile */
  @media screen and (max-width: 768px) {
    text-align: right;
  }

  /* very small mobile height */
  @media screen and (max-height: 500px) {
    font-size: 14px;
  }
`;

const Item = (props) => {
  const closeIfMobile = () => {
    if (props.isMobile) {
      props.closeMenu();
    }
  };

  return (
    <Link href={props.href}>
      <StyledLink
        onClick={closeIfMobile}
        variants={motionVariants(props.reduceMotion)}
      >
        <Title>{props.title}</Title>
        <Label>{props.description}</Label>
      </StyledLink>
    </Link>
  );
};

export default Item;
