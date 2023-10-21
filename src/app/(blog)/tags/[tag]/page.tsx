import { allArticles } from "contentlayer/generated";
import Article from "@/components/article";
import Headline from "@/components/headline";
import Shell from "@/components/shell";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface TagPageProps {
  params: {
    tag: string;
  };
}

async function getArticles(params: TagPageProps["params"]) {
  const articles = allArticles.filter((article) => article.tag === params.tag);
  if (!articles) {
    return null;
  }
  return articles;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  return {
    title: `${params.tag}`,
    description: `Articles tagged with "${params.tag}"`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const articles = await getArticles(params);

  if (!articles) {
    return notFound();
  }

  return (
    <Shell>
      <Headline title={`Articles tagged with "${params.tag}"`} />
      <div>
        {articles?.map((article, i) => <Article article={article} key={i} />)}
      </div>
    </Shell>
  );
}
