import { siteConfig } from "@/config/site";

export default function robots() {
  return {
    host: siteConfig.url,
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
