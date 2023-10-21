import { allArticles } from "contentlayer/generated";
import Headline from "@/components/headline";
import Icons from "@/components/icons";
import MDX from "@/components/mdx";
import ShareLink from "@/components/share";
import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

async function getArticle(params: ArticlePageProps["params"]) {
  const article = allArticles.find(
    (article) => article.slug.split("/articles/")[1] === params.slug,
  );

  if (!article) {
    return null;
  }

  return article;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(params);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params);

  if (!article) {
    return notFound();
  }

  return (
    <Shell className="gap-0">
      <Headline title={article.title} back={{ href: "/" }}>
        <div className="text-secondary text-sm">
          <span>
            {formatDate(new Date(article.date))} ·{" "}
            {`${article.readingTime} min`}
          </span>
        </div>
      </Headline>
      <MDX code={article.body.code} />
      <div className="w-full flex justify-between items-center mt-10">
        <Link href={"/"} aria-label="Back To Home">
          <Button>
            <Icons.arrowLeft size={20} />
            Back
          </Button>
        </Link>
        <ShareLink />
      </div>
    </Shell>
  );
}
