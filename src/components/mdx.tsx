"use client";
import "@/styles/prose.css";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

const components = {
  Image,
  a: (props: any) => (
    <Link href={props.href} {...props} target="_blank">
      {props.children}
    </Link>
  ),
};

export default function MDX({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose dark:prose-invert">
      <Component components={components} />
    </div>
  );
}
