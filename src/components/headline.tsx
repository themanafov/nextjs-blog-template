import Link from "next/link";
import Icons from "./icons";
import { Button } from "./ui/button";

interface HeadlineProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  back?: {
    href: string;
  };
}

export default function Headline({
  title,
  children,
  back,
  ...props
}: HeadlineProps) {
  return (
    <div className="flex flex-col gap-2" {...props}>
      <h1 className="text-4xl font-semibold flex min-[780px]:items-center max-[780px]:flex-col max-[780px]:gap-6  items-start ">
        {back && (
          <Link
            href={back.href}
            className="min-[780px]:absolute min-[780px]:-translate-x-[170%] "
          >
            <Button className="p-2" aria-label="back to home">
              <Icons.arrowLeft size={20} />
            </Button>
          </Link>
        )}
        {title}
      </h1>
      {children}
    </div>
  );
}
