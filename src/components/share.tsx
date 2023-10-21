"use client";

import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";
import Icons from "./icons";
import { Button } from "./ui/button";

export default function ShareLink() {
  const [isCopied, copyText] = useCopyToClipboard();
  return (
    <Button
      onClick={() => copyText(window.location.href)}
      aria-label="Copy Link"
    >
      <Icons.link size={20} className="-rotate-45" />
      {!isCopied ? "Share" : "Copied"}
    </Button>
  );
}
