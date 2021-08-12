import { StackItem, WorkItem, WorkItemStack } from "@prisma/client";
import Heading from "components/content/Heading";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import TechStackIcon from "components/content/TechStackIcon";
import Title from "components/content/Title";
import UnorderedList from "components/content/UnorderedList";
import Page from "components/layout/Page";
import prisma from "lib/prisma";
import { GetServerSideProps } from "next";
import ErrorPage from "next/error";
import React from "react";
import { deflate, inflate } from "util/hooks/reactBalloon";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;

  const workItem = await prisma.workItem.findUnique({
    where: {
      slug: slug,
    },
    include: {
      stackItems: {
        orderBy: {
          displayOrder: "asc",
        },
        include: {
          stackItem: true,
        },
      },
    },
  });

  let workItemTransformed = null;

  if (workItem !== null) {
    workItemTransformed = {
      ...workItem,
      startDate:
        workItem.startDate.toLocaleString("default", { month: "long" }) +
        " " +
        workItem.startDate.getFullYear(),
      endDate:
        workItem.endDate.toLocaleString("default", { month: "long" }) +
        " " +
        workItem.endDate.getFullYear(),
    };
  }

  return {
    props: { workItem: workItemTransformed },
  };
};

type WorkItemWithStack = WorkItem & {
  stackItems: (WorkItemStack & {
    stackItem: StackItem;
  })[];
};

interface WorkProps {
  workItem: WorkItemWithStack;
}

const Work: React.FC<WorkProps> = (props) => {
  const work = props.workItem;

  if (work == null) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page>
      <PageTitle>{work.title}</PageTitle>

      <Section>
        <Title>Overview 👀</Title>

        <Heading>Time Involved</Heading>
        <Paragraph>
          {work.startDate} - {work.endDate}
        </Paragraph>

        <Heading>About the business</Heading>
        {inflate(work.aboutTheBusiness)}

        <Heading>Work involved</Heading>
        {inflate(work.workInvolved)}

        <Heading>Stack</Heading>
        <Paragraph>
          {work.stackItems.map((stackItem, index) => (
            <TechStackIcon
              key={index}
              icon={stackItem.stackItem.icon}
              title={stackItem.stackItem.name}
              href={stackItem.stackItem.href}
            />
          ))}
        </Paragraph>

        <Heading>Personal Highlights</Heading>
        {inflate(work.personalHighlights)}
      </Section>

      <Section>
        <Title>The Story 📖</Title>

        {inflate(work.theStory)}
      </Section>
    </Page>
  );
};

export default Work;
