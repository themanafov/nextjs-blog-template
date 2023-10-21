import Menu from "@/components/menu";
import Tag from "@/components/tag";
import ThemeToggle from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="w-full h-20 p-6 flex flex-row justify-between items-center bg-1">
        <div className="text-xl font-medium text-primary flex gap-1 items-center">
          <Link href={"/"}>{siteConfig.title}</Link>
          <Tag />
        </div>
        <div className="flex items-center gap-2">
          <Menu />
          <ThemeToggle />
        </div>
      </header>
      <div className="w-[640px] mx-auto pt-36 h-full pb-20 max-md:w-full max-md:px-6">
        {children}
      </div>
    </div>
  );
}
