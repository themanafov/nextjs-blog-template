export type SiteConfig = {
  title: string;
  name: string;
  description?: string;
  url?: string;
  ogImage?: string;
  keywords: string[];
  defaultTheme: "dark" | "light";
};
