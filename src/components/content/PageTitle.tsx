import { cssVar, darken } from "polished";
import styled from "styled-components";

const Title = styled.h1`
  line-height: 1;
  font-weight: 700;
  color: ${darken(0.2, String(cssVar("--dark-blue", "#293462")))};
  position: relative;
  z-index: -1;
  background: var(--light-blue);
  border-bottom: 4px solid var(--coral);
  font-size: 2.5rem;
  padding: 2rem calc(2rem + 70px) 2rem 2rem;
  margin: -2rem -2rem 0rem;

  @media (min-width: 769px) {
    font-size: 3rem;
    padding: 32px 4rem;
    margin: -4rem -4rem 0.8rem -4rem;
  }
`;

interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return <Title>{children}</Title>;
};

export default PageTitle;
