import styled from "styled-components";

const StyledPage = styled.div`
  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }

  @media screen and (min-width: 769px) {
    padding: 4rem 4rem;
  }
`;

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
