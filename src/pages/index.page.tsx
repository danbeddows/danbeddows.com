import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faRocketLaunch } from "@fortawesome/pro-solid-svg-icons";
import Card from "src/components/content/Card";
import Link from "src/components/content/Link";
import PageTitle from "src/components/content/PageTitle";
import Paragraph from "src/components/content/Paragraph";
import Section from "src/components/content/Section";
import Title from "src/components/content/Title";
import UnorderedList from "src/components/content/UnorderedList";
import Page from "src/components/layout/Page";

const HomePage = () => {
  return (
    <Page>
      <PageTitle>Hello, World</PageTitle>
      <Section>
        <Title hideLink>
          I'm Dan Beddows, a Senior Web Engineer based in Manchester, UK ☔️
        </Title>

        <Card icon={faRocketLaunch} title={"I'm available for hire"}>
          <Paragraph>
            If you're looking for an contract web engineer:
          </Paragraph>
          <UnorderedList>
            <li>experienced with production React applications</li>
            <li>with a laser focus on UX and design</li>
            <li>that can work across the stack</li>
            <li>that understands best practices for the web</li>
            <li>to hire remotely in the UK as a contractor</li>
          </UnorderedList>
          <Paragraph>
            Then I'd love to chat and see if we can work together.
          </Paragraph>
          <Link href={"/contact"}>
            Send me a message <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Card>

        <Paragraph>
          I've been a web engineer for over 15 years, and I've:
        </Paragraph>

        <UnorderedList>
          <li>
            worked professionally as a software developer (most recently at
            Provenir)
          </li>
          <li>founded a couple of internet service businesses</li>
          <li>led the tech approach at digital agency Inhaus in Manchester</li>
        </UnorderedList>

        <Paragraph>
          During my time at Experian I worked on customer facing sites that had
          tens of thousands of users per month. I worked predominantly with
          React and Node, and created highly polished and well tested features
          🚢 I also ran knowledge sharing sessions on TypeScript, and mentored
          other engineers.
        </Paragraph>

        <Paragraph>
          Outside of work: good food, good coffee and hiking make up most of
          what I enjoy doing with my time 🍕 ☕️ 🥾
        </Paragraph>

        <Link href={"/about"}>
          More about me <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <br />
        <Link href={"/work"}>
          My latest work <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Section>
    </Page>
  );
};

export default HomePage;
