import Link from "components/content/Link";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Page from "components/layout/Page";

export default function Home() {
  return (
    <Page>
      <PageTitle>Hello, World 👋🏻</PageTitle>
      <Section>
        <Paragraph>
          I'm Dan Beddows, a Full Stack Web Developer based in Manchester, UK
          ☔️.
        </Paragraph>

        <Paragraph>
          I’ve worn many hats over my 10+ years in web development. I've worked
          professionally as a software developer, founded a couple of SaaS’s,
          and more recently I've led the tech approach at a digital agency in
          Manchester. During my time there, I worked directly with clients to
          advise on their tech stack, develop their product, act as a product
          owner, and then actually build and ship.
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
