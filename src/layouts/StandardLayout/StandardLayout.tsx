import Springboard from "src/components/global/Springboard/Springboard";
import { Page } from "src/components/Page";
import {
  ContentWrapper,
  PageWrapper,
  SpringboardWrapper
} from "./StandardLayout.styles";

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
