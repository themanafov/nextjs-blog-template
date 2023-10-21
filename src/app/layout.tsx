import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Analytics from "@/components/analytics";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s / ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  keywords: [...siteConfig.keywords],
  twitter: {
    card: "summary_large_image",
    site: "@your_name",
    title: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
