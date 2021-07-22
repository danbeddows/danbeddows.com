import PageTitle from "components/content/PageTitle";
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
    date: "Dec 2019 - Mar 2021",
    thumb: "/projects/tss/thumb.jpg",
  },
  {
    slug: "school-run",
    title: "School Run",
    teaser: "A service to keep parents informed by SMS",
    date: "Oct 2017 - Oct 2019",
    thumb: "",
  },
  {
    slug: "archisan",
    title: "Archisan",
    teaser: "A direct-to-consumer interiors shop",
    date: "Jan 2016 - Oct 2017",
    thumb: "",
  },
  {
    slug: "mrkt",
    title: "MRKT",
    teaser: "An online storebuilder service",
    date: "Mar 2013 - Dec 2015",
    thumb: "",
  },
  {
    slug: "zotti",
    title: "Zotti",
    teaser: "A costume jewellery ecommerce website.",
    date: "Dec 2011 - Jan 2011",
    thumb: "",
  },
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
  padding: 6px 12px;
`;

const ProjectTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: #ff5757;
  margin: 0;
`;

const ProjectTeaser = styled.p`
  font-size: 14px;
  margin: 0;
  color: #6d90ab;
`;

interface ProjectProps {
  data: {
    slug: string;
    title: string;
    teaser: string;
    date: string;
    thumb: string;
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
