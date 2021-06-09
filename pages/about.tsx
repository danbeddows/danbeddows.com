import Heading from "components/content/Heading";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Title from "components/content/Title";
import Page from "components/layout/Page";

const About = () => {
  return (
    <Page>
      <PageTitle>About</PageTitle>

      <Section>
        <Title>What I do 👨🏻‍💻</Title>

        <Heading>Frontend</Heading>

        <Paragraph>
          Over the past few years, frontend frameworks like React and Angular
          have began dominating the web. And rightfully so — they've brought a
          huge paradigm shift in how to build web applications for the better.
        </Paragraph>

        <Paragraph>
          As a result, I'm finding myself increasingly focused on the frontend,
          especially UX. I have an eye for transforming large amounts of
          complexity into interfaces that any user would find delightful. I also
          understand accessiblity concerns and how to build in an accessible
          manner.
        </Paragraph>

        <Heading>Backend</Heading>

        <Paragraph>
          For the past 15 years I've primarily written in PHP, with the
          occasional sprinkle of Java and C#. More recently, especially due to
          serverless, I've been building in TypeScript or JavaScript.
        </Paragraph>

        <Paragraph>
          I've built API's for a handful of reasons, like fetching financial
          markets data, processing e-commerce lifecycle events and even a
          mass-SMS API for schools to use. I've also integrated plenty to power
          those too, like Stripe, Twilio, IEX Cloud, Mandrill and many others.
        </Paragraph>

        <Heading>Security</Heading>

        <Paragraph>
          Computer security is more important than ever. As the web becomes more
          complex, new attack vectors become apparent or are created, and it's
          crucial to stay updated on the latest exploits.
        </Paragraph>

        <Paragraph>
          I'm incredibly diligent whether setting up a VPS, storing keys,
          processing input or otherwise. I studied and earnt a BSc in Computer
          Forensics and Security.
        </Paragraph>

        {/*<div>
          <h3>
            <span className={styles.highlight}>Business development</span>
          </h3>
          <p></p>
				</div>*/}
      </Section>

      <Section>
        <Title>What I enjoy working on 💪🏻</Title>

        <Paragraph>
          I'm at my best working with fast-paced startups where I can make a
          large impact quickly. I particularily enjoy working on e-commerce and{" "}
          SaaS projects.
        </Paragraph>
      </Section>

      <Section>
        <Title>Where I work 📍</Title>

        <Paragraph>
          I work remotely most of the time, with the occasional on-site visit.
          I'm based in Manchester, UK.
        </Paragraph>
      </Section>

      <Section>
        <Title>Other interests 🔎</Title>

        <Paragraph>
          Investing, politics, business, consumer technology.
        </Paragraph>
      </Section>
    </Page>
  );
};

export default About;
