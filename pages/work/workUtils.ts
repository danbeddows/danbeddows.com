import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import {
  TechStackItem,
  transformTechStack,
} from "src/components/content/TechStack";
import { getComponentPaths } from "src/util/mdxHelpers";

export const WORKITEM_PATH = path.join(process.cwd(), "src/mdx/work");
export const workItemFilePaths = fs
  .readdirSync(WORKITEM_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

const getWorkSlugs = () =>
  workItemFilePaths.map((filePath) => filePath.replace(/\.mdx?$/, ""));

export const getLatestWork = async (count = 5): Promise<WorkItem[]> => {
  const workSlugs = getWorkSlugs();
  const workItems: WorkItem[] = [];

  for (let i = 0; i < workSlugs.length; i++) {
    const workSlug = workSlugs[i];
    const workFilePath = path.join(WORKITEM_PATH, `${workSlug}.mdx`);
    const source = fs.readFileSync(workFilePath, "utf-8");
    const { frontmatter } = await bundleMDX({
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

    workItems.push(transformFrontmatterToWorkItem(frontmatter));
  }

  return workItems;
};

type frontmatter = { [key: string]: any };
const transformFrontmatterToWorkItem = (fm: frontmatter): WorkItem => {
  return {
    slug: fm.slug ?? "not-found",
    title: fm.title ?? "Unknown",
    teaser: fm.teaser ?? "Work item not found.",
    startDate: fm.startDate ?? "",
    startDateLabel: fm.startDateLabel ?? "Unknown",
    endDate: fm.endDate ?? "",
    endDateLabel: fm.endDateLabel ?? "Unknown",
    thumbUrl: fm.thumbUrl ?? "/projects/coming-soon.png",
    techStackText: fm.techStackText ?? "",
    techStack: transformTechStack(fm.techStackText ?? ""),
    isPublished: fm.published ?? false,
    isDraft: fm.draft ?? true,
  };
};

export interface WorkItem {
  slug: string;
  title: string;
  teaser: string;
  startDate: string;
  startDateLabel: string;
  endDate: string;
  endDateLabel: string;
  thumbUrl: string;
  techStackText: string;
  techStack: TechStackItem[];
  isPublished: boolean; // whether to appear in directories e.g /work
  isDraft: boolean; // whether the work detail page is not viewable
}
