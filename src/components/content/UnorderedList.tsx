import styled from "styled-components";

const StyledUl = styled.ul`
  margin: 1.2rem 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    max-width: 700px;
  }
`;

interface UnorderedListProps {
  children: React.ReactNode;
}

const UnorderedList = ({ children }: UnorderedListProps) => {
  return <StyledUl>{children}</StyledUl>;
};

export default UnorderedList;
