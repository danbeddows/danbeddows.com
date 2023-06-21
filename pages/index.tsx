import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faRocketLaunch } from "@fortawesome/pro-solid-svg-icons";
import Card from "components/content/Card";
import Link from "components/content/Link";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Title from "components/content/Title";
import UnorderedList from "components/content/UnorderedList";
import Page from "components/layout/Page";

const HomePage = () => {
  return (
    <Page>
      <PageTitle>Hello, World</PageTitle>
      <Section>
        <Paragraph>
          <Title hideLink>
            I'm Dan Beddows, a Full Stack Web Developer based in Manchester, UK
            ☔️
          </Title>
        </Paragraph>

        <Card icon={faRocketLaunch} title={"I'm available for hire"}>
          <Paragraph>
            If you're looking for an contract web engineer:
            <UnorderedList>
              <li>experienced with production React applications</li>
              <li>with a laser focus to UX and design</li>
              <li>that can work with the whole stack</li>
              <li>that understands best practices for the web</li>
              <li>to hire remotely in the UK as a contractor</li>
            </UnorderedList>
          </Paragraph>
          <Paragraph>
            Then I'd love to chat and see if we can work together.
          </Paragraph>
          <Link href={"/contact"}>
            Send me a message <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Card>

        <Paragraph>
          Web development is my passion, and over the last 10+ years I've:
        </Paragraph>

        <UnorderedList>
          <li>
            worked professionally as a software developer (most recently at
            Experian)
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
