import { cn } from "@/lib/utils";

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Shell({ children, className, ...props }: ShellProps) {
  return (
    <div className={cn("flex flex-col gap-11", className)} {...props}>
      {children}
    </div>
  );
}
