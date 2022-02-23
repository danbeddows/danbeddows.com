import { StackItem, WorkItem, WorkItemStack } from "@prisma/client";
import TechStackIcon from "components/content/TechStackIcon";
import Link from "next/link";
import WorkItemWithStack from "pages/work";
import styled from "styled-components";

const ProjectContents = styled.a`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  margin: 15px 0;

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

type WorkItemWithStack = WorkItem & {
  stackItems: (WorkItemStack & {
    stackItem: StackItem;
  })[];
};

interface ProjectProps {
  workItem: WorkItemWithStack;
}

const Project: React.FC<ProjectProps> = ({ workItem }) => {
  if (workItem.thumbUrl == "/") {
    workItem.thumbUrl = "/projects/coming-soon.png";
  }

  const projectContents = (
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
  );

  return (
    <>
      {workItem.isComingSoon && projectContents}
      {!workItem.isComingSoon && (
        <Link href={"/work/" + workItem.slug} passHref>
          {projectContents}
        </Link>
      )}
    </>
  );
};

export default Project;
