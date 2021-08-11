import { WorkItem } from ".prisma/client";
import { StackItem, WorkItemStack } from "@prisma/client";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import TechStackIcon from "components/content/TechStackIcon";
import Title from "components/content/Title";
import Page from "components/layout/Page";
import prisma from "lib/prisma";
import { GetStaticProps } from "next";
import Link from "next/link";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    flex-direction: row;
  }
`;

const ProjectContents = styled.a`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    width: 600px;
    margin: 30px 15px;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 320px;
  background-color: #555;
  background-size: cover;
  background-position: center;
`;

const Foreground = styled.div`
  width: 100%;
  height: 80px;
  background: #2b2b2b;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ForegroundLeft = styled.div`
  padding: 6px 18px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    max-width: 60%;
  }
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
  color: #fff;
`;

const ForegroundRight = styled.div`
  padding: 6px 18px;
  color: #fff;
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;

  i,
  svg {
    font-size: 26px;
    margin: 0 8px;
  }

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: flex;
    position: relative;
    max-width: 40%;
    top: 0;
    right: 0;
  }
`;

type CombinedWorkItem = WorkItem & {
  stackItems: (WorkItemStack & {
    stackItem: StackItem;
  })[];
};

interface ProjectProps {
  workItem: CombinedWorkItem;
}

const Project: React.FC<ProjectProps> = ({ workItem }) => {
  return (
    <Link href={"/work/" + workItem.slug} passHref>
      <ProjectContents>
        <Background
          style={{ backgroundImage: "url(" + workItem.thumbUrl + ")" }}
        />
        <Foreground>
          <ForegroundLeft>
            <ProjectTitle>{workItem.title}</ProjectTitle>
            <ProjectTeaser>{workItem.teaser}</ProjectTeaser>
          </ForegroundLeft>
          <ForegroundRight>
            {workItem.stackItems.map((stackItem, index) => (
              <TechStackIcon
                key={index}
                icon={stackItem.stackItem.icon}
                title={stackItem.stackItem.name}
              />
            ))}
          </ForegroundRight>
        </Foreground>
      </ProjectContents>
    </Link>
  );
};

interface Props {
  workList: CombinedWorkItem[];
}

const Work: React.FC<Props> = (props) => {
  return (
    <Page>
      <PageTitle>Work</PageTitle>

      <Section>
        <Title>Projects I've worked on 👨🏻‍💻</Title>

        <Paragraph>
          This is a list of a select few projects I've worked on over the years.
          These pieces in particular had me flex problem solving skills and
          often integrate a number of technologies that I hadn't used before.
        </Paragraph>

        <ProjectsContainer>
          {props.workList.map((workItem, index) => (
            <Project workItem={workItem} key={index}></Project>
          ))}
        </ProjectsContainer>
      </Section>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  /**
   * Fetch work items from db
   */
  const workItems = await prisma.workItem.findMany({
    include: {
      stackItems: {
        take: 3,
        orderBy: {
          displayOrder: "asc",
        },
        include: {
          stackItem: true,
        },
      },
    },
  });

  /**
   * Map through each result and change the Date objects to strings (<month name> <year>)
   */
  let workItemsTransformed = workItems.map((w) => ({
    ...w,
    startDate:
      w.startDate.toLocaleString("default", { month: "long" }) +
      " " +
      w.startDate.getFullYear(),
    endDate:
      w.endDate.toLocaleString("default", { month: "long" }) +
      " " +
      w.startDate.getFullYear(),
  }));

  /**
   * Return work list as component prop
   */
  return { props: { workList: workItemsTransformed } };
};

export default Work;
