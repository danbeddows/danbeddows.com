import { StackItem, WorkItem, WorkItemStack } from "@prisma/client";
import Heading from "components/content/Heading";
import PageTitle from "components/content/PageTitle";
import Paragraph from "components/content/Paragraph";
import Section from "components/content/Section";
import TechStackIcon from "components/content/TechStackIcon";
import Title from "components/content/Title";
import Page from "components/layout/Page";
import prisma from "lib/prisma";
import { GetServerSideProps } from "next";
import React from "react";
import { inflate } from "util/hooks/reactBalloon";

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

  if (workItem === null) {
    return { notFound: true };
  }

  /**
   * Transform date objects to strings
   */
  const dateToStr = (d: Date): string =>
    d.toLocaleString("default", { month: "long" }) + " " + d.getFullYear();

  const { startDate, endDate } = workItem;

  const startStr = dateToStr(startDate);
  const endStr = dateToStr(endDate);

  const workProp = { ...workItem, startDate: startStr, endDate: endStr };

  return {
    props: { workProp },
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

  return (
    <Page>
      <PageTitle>{work.title}</PageTitle>

      <Section>
        <Title>Overview 👀</Title>

        <Heading>About the business</Heading>
        {inflate(work.aboutTheBusiness)}

        <Heading>Work involved</Heading>
        {inflate(work.workInvolved)}

        <Heading>Time Involved</Heading>
        <Paragraph>
          {work.startDate} - {work.endDate}
        </Paragraph>

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
