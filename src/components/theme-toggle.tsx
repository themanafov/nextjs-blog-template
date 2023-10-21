"use client";
import { useTheme } from "next-themes";
import Icons from "./icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 text-icon-default flex justify-center dark:[&_.sun]:block [&_.sun]:hidden dark:[&_.moon]:hidden items-center hover:bg-3 rounded-lg transition-colors cursor-pointer"
    >
      <Icons.sun size={20} className="sun" />
      <Icons.moon size={20} className="moon" />
    </div>
  );
}
