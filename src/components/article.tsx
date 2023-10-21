import { formatDate } from "@/lib/utils";
import { Article } from "contentlayer/generated";
import Link from "next/link";

export default function Article({ article }: { article: Article }) {
  return (
    <Link
      href={article.slug}
      className="min-w-full max-md:w-[100 + 5] flex flex-col p-5 -mx-5 hover:bg-3 rounded-lg cursor-pointer transition-colors"
    >
      <span className="uppercase  text-secondary mb-1 text-xs tracking-wide">
        {article.tag}
      </span>
      <h2 className="text-2xl font-medium">{article.title}</h2>
      <p className="text-secondary text-sm">{article.description}</p>
      <span className="mt-4 text-secondary text-xs">
        {formatDate(new Date(article.date))} · {`${article.readingTime} min`}
      </span>
    </Link>
  );
}
