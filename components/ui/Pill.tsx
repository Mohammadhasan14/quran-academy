import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Pill({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "rounded-full border border-text/[.14] px-2.5 py-1 text-xs text-text-muted",
        className,
      )}
      {...props}
    />
  );
}
