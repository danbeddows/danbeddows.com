import { faArrowRight, faRocketLaunch } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "components/content/Card";
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

        <Card icon={faRocketLaunch} title={"Hire me for your next project"}>
          <Paragraph>
            I currently have availablity to take on a new project.
          </Paragraph>
          <Paragraph>
            If you're looking for an engineer:
            <UnorderedList>
              <li>experienced with React production applications</li>
              <li>with a laser focus to UX and design</li>
              <li>that can deal with the backend too</li>
              <li>that understands best practices for the web</li>
              <li>to hire remotely as a contractor</li>
            </UnorderedList>
          </Paragraph>
          <Paragraph>
            Then I'd love to chat to you about your project and see if we can
            work together.
          </Paragraph>
          <Link href={"/contact"}>
            Send me a message <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Card>

        <Paragraph>
          Web development is my passion, and over the last 10+ years I’ve wore
          many hats including:
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
          During my time at Inhaus I've worked directly with clients to advise
          on their tech stack, develop their product, act as a product owner,
          and also build and ship their product.
        </Paragraph>

        <Paragraph>
          Outside of work: good food, good coffee and hiking make up most of
          what I enjoy doing with my time 🍕 ☕️ 🥾.
        </Paragraph>

        <Link href={"/about"}>
          More about me <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <br />
        <Link href={"/about"}>
          My latest work <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Section>
    </Page>
  );
}
