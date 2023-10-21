# Next.js Blog Template

![Next.js Blog Template](https://next-blog-contentlayer.vercel.app/static/before-you-start/blog-template.png)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthemanafov%2Fnextjs-blog-template)

## About this project

This project was made with Next.js 13.5 and Contentlayer. With this template, you can create your own blog with a minimal and simple design by typing in markdown. Inspired by the design by [Nijat Manafov](https://nijatmanafov.com).

## Stack

- Framework: [Next.js](https://nextjs.org)
- Styling: [TailwindCSS](https://tailwindcss.com)
- Language: [TypeScript](https://typescriptlang.org)
- Content Manager: [Contentlayer](https://contentlayer.dev)
- Deployment: [Vercel](https://vercel.com)

## Getting Started

1. With Use this template repository

2. Clone project

```sh
# http
git clone https://github.com/themanafov/nextjs-blog-template.git
```

```sh
# ssh
git clone git@github.com:themanafov/nextjs-blog-template.git
```

3. With `create-next-app`

```sh
npx create-next-app -e https://github.com/themanafov/nextjs-blog-template your-blog-name
```

Install the required packages and run the template

```sh
cd your-blog-name
npm install
# pnpm install
# yarn install
```

## Configuration

You can adjust config of the site by going to this file `src/config/site.ts`.
These settings will be used in SEO optimization.
Here you can enter the name of the site, its description, default theme, etc. you can set it.

```javascript
export const siteConfig: SiteConfig = {
  title: "My Blog",
  name: "Next.js Blog Template",
  description: "A blog template made with Next.js 13 and Contentlayer",
  url: "https://next-blog-contentlayer.vercel.app",
  ogImage: "",
  keywords: ["blog", "template", "next.js", "tailwind", "react"],
  defaultTheme: "dark",
};
```

After these settings, when you use external images in your article or page, the protocol in this file `next.config.js` is set to https by default, you can set http or https according to your choice, or you can set it by adding the domain of the place where you took the image.

```javascript
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
```

## Content

There are `content/pages` and `content/articles` folders in content folder. Every file in the pages folder will automatically appear in the menu, and every file in the articles folder will also appear on the home page.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthemanafov%2Fnextjs-blog-template)
