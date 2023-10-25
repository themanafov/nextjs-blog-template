import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tag: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (article) =>
        article._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    readingTime: {
      type: "json",
      resolve: (article) => Math.ceil(readingTime(article.body.raw).minutes),
    },
    href: {
      type: "string",
      resolve: (article) => `/${article._raw.flattenedPath}`,
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  contentType: "mdx",
  filePathPattern: `pages/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (page) => page._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Page, Article],
});
