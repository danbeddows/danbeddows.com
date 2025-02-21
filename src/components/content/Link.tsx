import NextLink from "next/link";
import styled from "styled-components";

const StyledLink = styled(NextLink)`
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
  children: React.ReactNode;
  href: string;
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <StyledLink href={href}>
      {children}
    </StyledLink>
  );
};

export default Link;
