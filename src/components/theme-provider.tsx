"use client";
import { siteConfig } from "@/config/site";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      defaultTheme={siteConfig.defaultTheme}
      attribute="class"
      {...props}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
