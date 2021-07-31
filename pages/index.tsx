import Link from "components/content/Link";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Title from "components/content/Title";
import UnorderedList from "components/content/UnorderedList";
import Page from "components/layout/Page";

export default function Home() {
  return (
    <Page>
      <PageTitle>Hello, World 👋🏻</PageTitle>
      <Section>
        <Paragraph>
          <Title hideLink>
            I'm Dan Beddows, a Full Stack Web Developer based in Manchester, UK
            ☔️
          </Title>
        </Paragraph>

        <Paragraph>
          Web development is my passion, and I’ve worn many hats over the last
          10+ years including:
        </Paragraph>
        <UnorderedList>
          <li>working professionally as a software developer</li>
          <li>founding a couple of internet service businesses (SaaS's)</li>
          <li>
            more recently I've led the tech approach at digital agency Inhaus in
            Manchester
          </li>
        </UnorderedList>
        <Paragraph>
          During my time at Inhaus I worked directly with clients to advise on
          their tech stack, develop their product, act as a product owner, and
          actually build and ship their product.
        </Paragraph>

        <Paragraph>
          Outside of work: good food, good coffee and hiking make up most of
          what I enjoy doing with my time 🍕 ☕️ 🥾.
        </Paragraph>

        <Link href={"/about"}>Learn more &rarr;</Link>
      </Section>
    </Page>
  );
}
