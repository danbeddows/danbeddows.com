import fs from "fs";
import path from "path";

// Returns an object with a single value
// The object key:
//   The file path mdx-bundler expects (and is used in import statements in mdx files)
//
// The object value:
//   The entire contents of the file, that will be bundled with mdx-bundler
export const getComponentPaths = (component: string) => {
  const mdxPath = `./src/components/content/${component}.tsx`;
  const localPath = path.join(
    process.cwd(),
    `src/components/content/${component}.tsx`
  );

  return {
    [mdxPath]: fs.readFileSync(localPath, { encoding: "utf8", flag: "r" }),
  };
};
