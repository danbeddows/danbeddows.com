import NextLink from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  color: var(--dark-blue);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
`;

interface LinkProps {
  href: string;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
