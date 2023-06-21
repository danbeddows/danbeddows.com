import fs from "fs";
import path from "path";
import { useMemo } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { POSTS_PATH, postFilePaths } from "src/util/mdx";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import Page from "src/components/layout/Page";
import PageTitle from "src/components/content/PageTitle";
import Paragraph from "src/components/content/Paragraph";
import Heading from "src/components/content/Heading";
import UnorderedList from "src/components/content/UnorderedList";
import Title from "src/components/content/Title";

interface WorkPageProps {
  frontmatter: { [key: string]: any };
  code: string;
}
const WorkPage: React.FC<WorkPageProps> = ({ frontmatter, code }) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Page>
      <PageTitle>{frontmatter.title}</PageTitle>

      <MDXComponent
        components={{ p: Paragraph, h3: Heading, ul: UnorderedList, h1: Title }}
      />
    </Page>
  );
};

const getComponentPaths = (component: string) => {
  const mdxPath = `./src/components/content/${component}.tsx`;
  const localPath = path.join(
    process.cwd(),
    `src/components/content/${component}.tsx`
  );

  return {
    [mdxPath]: fs.readFileSync(localPath, { encoding: "utf8", flag: "r" }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath, "utf-8");

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
      ...getComponentPaths("TechStackIcon"),
    },
  });

  return {
    props: { code, frontmatter },
    notFound: process.env.NODE_ENV === "production" && frontmatter.draft,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((filePath) => filePath.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default WorkPage;
