import { Page } from "src/components/Page";

interface PageLayoutProps {
  children: React.ReactNode;
}
const PageLayout = ({ children }: PageLayoutProps) => {
  return <Page>{children}</Page>;
};

export { PageLayout };
