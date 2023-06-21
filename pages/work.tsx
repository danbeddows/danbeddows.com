import { GetStaticProps } from "next";
import styled from "styled-components";
import { StackItem, WorkItem, WorkItemStack } from "@prisma/client";
import PageTitle from "src/components/content/PageTitle";
import Paragraph from "src/components/content/Paragraph";
import Section from "src/components/content/Section";
import Title from "src/components/content/Title";
import Page from "src/components/layout/Page";
import Project from "src/components/pages/work/Project";
import { getWorkItems } from "src/lib/workItems/getWorkItems";

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

type WorkItemWithStack = WorkItem & {
  stackItems: (WorkItemStack & {
    stackItem: StackItem;
  })[];
};

interface WorkPageProps {
  workList: WorkItemWithStack[];
}

const WorkPage: React.FC<WorkPageProps> = (props) => {
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
  const workItems = await getWorkItems();
  const workItemsSorted = workItems.sort(
    (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
  );

  /**
   * Return work list as component prop
   */
  return { props: { workList: workItemsSorted }, revalidate: 600 };
};

export default WorkPage;
