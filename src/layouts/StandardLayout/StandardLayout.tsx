import { Page } from "src/components/Page";
import {
  ContentWrapper,
  PageWrapper,
  SpringboardWrapper
} from "./StandardLayout.styles";
import { Springboard } from "src/components/Springboard";

interface StandardLayoutProps {
  children: React.ReactNode;
}
const StandardLayout = ({ children }: StandardLayoutProps) => {
  return (
    <PageWrapper>
      <SpringboardWrapper>
        <Springboard />
      </SpringboardWrapper>
      <ContentWrapper>
        <Page>{children}</Page>
      </ContentWrapper>
    </PageWrapper>
  );
};

export { StandardLayout };
