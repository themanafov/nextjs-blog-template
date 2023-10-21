import { allArticles } from "contentlayer/generated";
import Article from "@/components/article";
import Headline from "@/components/headline";
import Shell from "@/components/shell";
import { formatDate } from "@/lib/utils";

export default function Home() {
  return (
    <Shell>
      <Headline title="Articles">
        <div className="text-secondary text-sm">
          <span>{formatDate(new Date())}</span> ·{" "}
          <span>{allArticles.length} articles</span>
        </div>
      </Headline>
      <div>
        {allArticles.map((article, i) => (
          <Article article={article} key={i} />
        ))}
      </div>
    </Shell>
  );
}
