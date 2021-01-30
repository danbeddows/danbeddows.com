import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Title from "components/content/Title";
import Page from "components/layout/Page";

export default function Home() {
  return (
    <Page>
      <PageTitle>Hello, World 👋🏻</PageTitle>

      <Section>
        <Title>Introduction</Title>

        <Paragraph>
          I'm Dan Beddows, a web developer based in Manchester, UK ☔️.
        </Paragraph>

        <Paragraph>
          I spend most of my time looking after all things tech at INHAUS, a
          digital agency based in Manchester 👨‍💻.
        </Paragraph>

        <Paragraph>
          I work with clients to advise on, project manage and ship great
          software.
        </Paragraph>

        <Paragraph>
          Good food, good coffee and hiking make up the most of what I enjoy
          doing with my time away from work 🍕 ☕️ 🥾.
        </Paragraph>

        <Paragraph>I also have a shameless passion for donuts 🍩.</Paragraph>
      </Section>
    </Page>
  );
}
