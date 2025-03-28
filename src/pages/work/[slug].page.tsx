import fs from "fs";
import path from "path";
import { useMemo } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import PageTitle from "src/components/content/PageTitle";
import Paragraph from "src/components/content/Paragraph";
import Heading from "src/components/content/Heading";
import UnorderedList from "src/components/content/UnorderedList";
import Title from "src/components/content/Title";
import { WORKITEM_PATH, workItemFilePaths } from "./workUtils";
import { getComponentPaths } from "src/util/mdxHelpers";
import { StandardLayout } from "src/layouts/StandardLayout";

interface WorkPageProps {
  children: React.ReactNode;
  frontmatter: { [key: string]: any };
  code: string;
}
const WorkPage = ({ frontmatter, code }: WorkPageProps) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <PageTitle>{frontmatter.title}</PageTitle>

      <MDXComponent
        // @ts-ignore
        components={{ p: Paragraph, h3: Heading, ul: UnorderedList, h1: Title }}
      />
    </>
  );
};

WorkPage.getLayout = function getLayout(page: React.ReactElement) {
  return <StandardLayout>{page}</StandardLayout>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const workFilePath = path.join(WORKITEM_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(workFilePath, "utf-8");

  const { code, frontmatter, matter } = await bundleMDX({
    source,
    esbuildOptions: (options) => {
      options.platform = "node";

      return options;
    },
    files: {
      ...getComponentPaths("Paragraph"),
      ...getComponentPaths("Title"),
      ...getComponentPaths("Section"),
      ...getComponentPaths("Heading"),
      ...getComponentPaths("TechStack"),
      ...getComponentPaths("TechStackIcon")
    }
  });

  return {
    props: { code, frontmatter },
    notFound: process.env.NODE_ENV === "production" && frontmatter.draft
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = workItemFilePaths
    .map((filePath) => filePath.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};

export default WorkPage;
