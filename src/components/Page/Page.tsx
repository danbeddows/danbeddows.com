import { StyledPage } from "./Page.styles";

interface PageProps {
  children: React.ReactNode;
}
const Page = ({ children }: PageProps) => {
  return <StyledPage>{children}</StyledPage>;
};

export { Page };
