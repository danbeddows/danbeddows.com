import { GetStaticProps } from "next";
import styled from "styled-components";
import PageTitle from "src/components/content/PageTitle";
import Paragraph from "src/components/content/Paragraph";
import Section from "src/components/content/Section";
import Title from "src/components/content/Title";
import Page from "src/components/layout/Page";
import Project from "pages/work/WorkCard";
import { WorkItem, getLatestWork } from "./work/workUtils";

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

interface WorkPageProps {
  workList: WorkItem[];
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
  const workItems = await getLatestWork();

  return { props: { workList: workItems } };
};

export default WorkPage;
