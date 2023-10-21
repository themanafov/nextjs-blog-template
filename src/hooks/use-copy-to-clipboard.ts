import { useState } from "react";

type CopyFunction = (text: string) => void;

export default function useCopyToClipboard(): [boolean, CopyFunction] {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyText: CopyFunction = async (text: string) => {
    if (!navigator?.clipboard) {
      console.error("Clipboard not supported.");
    }
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return [isCopied, copyText];
}
