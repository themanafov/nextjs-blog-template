import { allArticles, allPages } from "contentlayer/generated";
import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default function sitemap() {
  const articleRoutes = allArticles.map((article) => ({
    lastModified: article.date,
    url: `${siteConfig.url}${article.href}`,
  }));

  const routes = allPages.map((page) => ({
    lastModified: new Date().toISOString().split("T")[0],
    url: `${siteConfig.url}/${page.slug}`,
  }));

  return [...routes, ...articleRoutes] as MetadataRoute.Sitemap;
}
