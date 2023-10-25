import { allPages } from "contentlayer/generated";
import Headline from "@/components/headline";
import Icons from "@/components/icons";
import MDX from "@/components/mdx";
import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPage(params: PageProps["params"]) {
  const href = params.slug.join('/')
  const page = allPages.find((page) => page.slug === href);

  if (!page) {
    return null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPage(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Page({ params }: PageProps) {
  const page = await getPage(params);

  if (!page) {
    return notFound();
  }

  return (
    <Shell>
      <Headline title={page.title}>
        <span className="text-secondary text-sm">{page.description}</span>
      </Headline>
      <MDX code={page.body.code} />
      <Link href={"/"} className="mt-5" aria-label="Back To Home">
        <Button>
          <Icons.arrowLeft size={20} /> Back Home
        </Button>
      </Link>
    </Shell>
  );
}
