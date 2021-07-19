import Link from "components/content/Link";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Title from "components/content/Title";
import Page from "components/layout/Page";

export default function Home() {
  return (
    <Page>
      <Section>
        <Title>Hello, World 👋🏻</Title>

        <Paragraph>
          I'm Dan Beddows, a Frontend Web Developer based in Manchester, UK ☔️.
        </Paragraph>

        <Paragraph>
          I’ve worn a number of hats over the past decade. I’ve worked
          professionally as a software developer, founded a couple of SaaS’s,
          and more recently led the tech approach to a digital agency in
          Manchester.
        </Paragraph>

        <Paragraph>
          Good food, good coffee and hiking make up the most of what I enjoy
          doing with my time away from work 🍕 ☕️ 🥾.
        </Paragraph>

        <Link href={"/about"}>Learn more &rarr;</Link>
      </Section>
    </Page>
  );
}
