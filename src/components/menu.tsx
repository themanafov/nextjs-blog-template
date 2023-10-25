"use client";
import { allPages } from "contentlayer/generated";
import Icons from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Menu() {
  const pathname = usePathname();
  console.log(allPages)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="menu"
        className="p-2 hover:bg-3 outline-none rounded-lg transition-colors data-[state=open]:bg-3"
      >
        <Icons.menu size={20} className="text-icon-default" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1">
        <DropdownMenuItem asChild>
          <Link
            href={"/"}
            className={cn("rounded-lg", pathname === "/" ? "bg-3" : "")}
          >
            Home
          </Link>
        </DropdownMenuItem>
        {allPages.map((page, i) => (
          <DropdownMenuItem key={i} asChild>
            <Link
              href={`/${page.slug}`}
              className={cn("rounded-lg", pathname === `/${page.slug}` ? "bg-3" : "")}
            >
              {page.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
