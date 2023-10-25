"use client";

import { allArticles } from "contentlayer/generated";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Tag() {
  const segments = useSelectedLayoutSegments();
  const path = segments.join("/");

  if (path.startsWith("articles")) {
    const slug = path.split("/").slice(1).join("/");
    const article = allArticles.find((article) => article.slug === slug);
    if (!article) {
      return null;
    }

    return (
      <Link
        href={`/tags/${article.tag}`}
        className="capitalize text-secondary tracking-wide"
      >
        {article.tag}
      </Link>
    );
  }
}
