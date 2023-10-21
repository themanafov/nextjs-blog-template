import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        md: "700px",
      },
      colors: {
        quote: "var(--quote)",
        highlight: "var(--highlight)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        "1": "var(--bg-level-1)",
        "2": "var(--bg-level-2)",
        "3": "var(--bg-level-3)",
        default: "var(--icon-default)",
        "icon-default": "var(--icon-default)",
        "icon-active": "var(--icon-active)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
