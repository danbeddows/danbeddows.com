import {
  faAngular,
  faAws,
  faCss3Alt,
  faJs,
  faPaypal,
  faPhp,
  faReact,
  faStripe,
  faSymfony,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import Title from "components/content/Title";
import Page from "components/layout/Page";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";

const projectList = [
  {
    slug: "the-shirt-society",
    title: "The Shirt Society",
    teaser: "A subscription-based menswear startup",
    date: "Oct 2019 - Mar 2021",
    thumb: "/projects/tss/thumb.jpg",
    stack: [
      { name: "React", icon: faReact },
      { name: "Symfony", icon: faSymfony },
      { name: "Stripe", icon: faStripe },
    ],
  } /*,
  {
    slug: "school-run",
    title: "School Run",
    teaser: "A service to keep parents informed by SMS",
    date: "Oct 2017 - Oct 2019",
    thumb: "/projects/schoolrun/thumb.jpg",
    stack: [
      { name: "Angular", icon: faAngular },
      { name: "PHP", icon: faPhp },
      { name: "AWS", icon: faAws },
    ],
  },
  {
    slug: "archisan",
    title: "Archisan",
    teaser: "A direct-to-consumer interiors store",
    date: "Jan 2016 - Oct 2017",
    thumb: "/projects/archisan/thumb.jpg",
    stack: [
      { name: "PHP", icon: faPhp },
      { name: "JavaScript", icon: faJs },
      { name: "Stripe", icon: faStripe },
    ],
  },
  {
    slug: "mrkt",
    title: "MRKT",
    teaser: "An online storebuilder service",
    date: "Mar 2013 - Dec 2015",
    thumb: "",
    stack: [
      { name: "PHP", icon: faPhp },
      { name: "JavaScript", icon: faJs },
      { name: "Stripe", icon: faStripe },
    ],
  },
  {
    slug: "zotti",
    title: "Zotti",
    teaser: "A costume jewellery ecommerce website.",
    date: "Dec 2011 - Jan 2011",
    thumb: "",
    stack: [
      { name: "PHP", icon: faPhp },
      { name: "PayPal", icon: faPaypal },
      { name: "CSS", icon: faCss3Alt },
    ],
  }*/,
];

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ProjectContents = styled.a`
  width: 600px;
  height: 400px;
  margin: 30px 15px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
`;

const Background = styled.div`
  width: 100%;
  height: 320px;
  position: absolute;
  z-index: 5;
  background-color: #555;
  background-size: cover;
  background-position: center;
`;

const Foreground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  z-index: 10;
  background: #383838;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ForegroundLeft = styled.div`
  max-width: 60%;
  padding: 6px 18px;
`;

const ProjectTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: var(--coral);
  margin: 0;
`;

const ProjectTeaser = styled.p`
  font-size: 14px;
  margin: 0;
  color: var(--light-blue);
`;

const ForegroundRight = styled.div`
  max-width: 40%;
  padding: 6px 18px;
  color: #fff;
  display: flex;
  position: relative;

  i,
  svg {
    font-size: 26px;
    margin-left: 10px;
  }

  div {
    // position: absolute;
    // width: 100%;
    // height: 100%;
    // background: linear-gradient(270deg, #383838 23%, transparent);
    // pointer-events: none;
  }
`;

interface ProjectProps {
  data: {
    slug: string;
    title: string;
    teaser: string;
    date: string;
    thumb: string;
    stack: { name: string; icon: IconDefinition }[];
  };
}

const Project: FunctionComponent<ProjectProps> = ({ data }) => {
  return (
    <Link href={"/work/" + data.slug} passHref>
      <ProjectContents>
        <Background style={{ backgroundImage: "url(" + data.thumb + ")" }} />
        <Foreground>
          <ForegroundLeft>
            <ProjectTitle>{data.title}</ProjectTitle>
            <ProjectTeaser>{data.teaser}</ProjectTeaser>
          </ForegroundLeft>
          <ForegroundRight>
            <div></div>
            {data.stack.map((stackItem, index) => (
              <FontAwesomeIcon
                key={index}
                fixedWidth
                icon={stackItem.icon}
                title={stackItem.name}
              />
            ))}
          </ForegroundRight>
        </Foreground>
      </ProjectContents>
    </Link>
  );
};

const Work = () => {
  return (
    <Page>
      <PageTitle>Work</PageTitle>

      <Section>
        <Title>Projects I've worked on</Title>

        <Paragraph>
          This is a select list of a few of the projects I've worked on over the
          years. These pieces in particular had me flex problem solving skills
          and often integrate a number of technologies that I hadn't used
          before.
        </Paragraph>

        <ProjectsContainer>
          {projectList.map((project, index) => (
            <Project data={project} key={index}></Project>
          ))}
        </ProjectsContainer>
      </Section>
    </Page>
  );
};

export default Work;
